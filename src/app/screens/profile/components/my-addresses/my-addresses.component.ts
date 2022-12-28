import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/screens/auth/services/auth.service';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss']
})
export class MyAddressesComponent implements OnInit {
  addresses:any[]=[]
  areas:any[]=[]
  addressForm:FormGroup=new FormGroup({})
  loading:boolean=false
  showpopup:boolean=false
  userid=''
  showDeleteAddresspopup:number=-1
  deleteLoading:boolean=false
  update=-1
  submited:boolean=false
  constructor(public authservice:AuthService,
    private toastr:ToastrService,
    private fb:FormBuilder) { }
pathcharea() {
  this.addressForm.patchValue({
    area_id:""
  })
}
  ngOnInit(): void {
    this.authservice.userProfile.subscribe(
      (res:any) => {
        if(res) {
          this.authservice.getAddress(res?.user_id)
          this.userid=res?.user_id
          this.authservice.addresses.subscribe(
            (addresses:any)=> {
              console.log(addresses)
              this.addresses=addresses
            }
          )
        }
      }
    )
    this.addressForm = this.fb.group({
      title:['',Validators.required],
      area_id:['',Validators.required],
      block:['',Validators.required],
      street:['',Validators.required],
      building:['',Validators.required],
      floor:[''],
      apartment:[''],
      additional_direction:[''],
      avenue:['']
    })
    this.authservice.areas.subscribe(
      (res:any) => {
        this.areas=res
      }
    )
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}

addAddress(formvalue:any) {
  this.submited=true
  if(this.addressForm.valid) {
    for(let i = 0 ;i<this.areas.length;i++) {
      this.areas[i]?.areas.forEach((item:any) => {
        if(item?.id==formvalue.area_id) {
          formvalue.area_name=item?.name
        }
      })   
  }
    this.loading=true
    if(this.update!=-1) {
      formvalue.address_id=this.update
      this.authservice.updateAddres(formvalue).subscribe(
        (res:any)=> {
          this.loading=false
          console.log(res)
          if(res?.code==1) {
            this.authservice.getAddress(this.userid)
            this.toastr.success(res?.message);
            this.showpopup=false
          } else {
            
          }
        }
      )
    } else {
      this.authservice.addAddress(formvalue).subscribe(
        (res:any)=> {
          this.loading=false
          console.log(res)
          if(res?.code==1) {
            this.authservice.getAddress(this.userid)
            this.toastr.success(res?.message);
            this.showpopup=false
          } else {
            
          }
        }
      )
    }

  }
}
deleteAddress() {
  this.deleteLoading=true
  this.authservice.deleteAddress(this.showDeleteAddresspopup).subscribe((res:any)=> {
    if(res?.code==1) {
      this.authservice.getAddress(this.userid)
      this.toastr.success(res?.message);
      this.showDeleteAddresspopup=-1
    } 
    this.deleteLoading=false
  })
}

editAddress(item:any) {
   this.addressForm.patchValue({
    title:item?.title,
    area_name:item?.area_name,
    area_id:item?.area_id,
    block:item?.block,
    street:item?.street,
    building:item?.building,
    floor:item?.floor,
    apartment:item?.apartment,
    additional_direction:item?.additional_direction,
    avenue:item?.avenue
   })
   this.showpopup=true
   this.update=item.id
}
}
