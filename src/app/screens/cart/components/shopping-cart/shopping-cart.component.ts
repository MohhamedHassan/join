import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { CartService } from '../../sertvies/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  loading=true
  cartitems:any[]=[]
  showDeleteCArtitem=-1
  showpopup=-1
  total=0
  shipingCharge=0
  promoCodeLoading=false
  promocodedisabled=false
  addressloading=false
  areas:any[]=[]
  addresses:any[]=[]
  addAddressPopup=false
  addressForm:FormGroup
  submited=false
  userid=null
  selectedAddress=null
  promocode=''
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
    if(!!localStorage.getItem('joinToken') ) {
      this.addressloading=true
      this.authservice.addAddress(formvalue).subscribe(
        (res:any)=> {
          this.addressloading=false
          console.log(res)
          if(res?.code==1) {
            this.authservice.getAddress(this.userid)
            this.toastr.success(res?.message);
            this.addAddressPopup=false
          } else {
            
          }
        }
      )
    } else {
      this.addresses.push(formvalue)
      this.addAddressPopup=false
    }
  
    }
  }
  constructor(private router:Router,
    private datePipe:DatePipe,
    private toastr:ToastrService,
    private fb:FormBuilder,
    public authservice:AuthService,
    private cartService:CartService) { }
    pathcharea() {
      this.addressForm.patchValue({
        area_id:""
      })
    }
  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false
    },1000)
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
    if(!!localStorage.getItem('joinToken')) {
      this.authservice.userProfile.subscribe(
        (res:any) => {
          if(res) {
            this.userid=res?.user_id
            this.authservice.getAddress(res?.user_id)
            this.authservice.addresses.subscribe(
              (addresses:any)=> {
                console.log(addresses)
                if(addresses) this.addresses=addresses
              }
            )
          }
        }
      )
    } 
    let cart = localStorage.getItem('joincart')
    if(cart)  {
      this.cartitems=JSON.parse(cart)
    }
    if(this.cartitems?.length) {
      this.cartitems.map(i => i.disc=0)
    }
    this.getTotal() 
    console.log(this.cartitems)

  }
 
  getTotal() {
    if(this.cartitems?.length) {
      this.total=0
      this.shipingCharge=0
      let productCharg = []
      let activityCharg = []
      this.cartitems.forEach(i =>  {
        if(i?.cstmtype==1&&i?.type==1) {
          if(i?.disc==0) {
            this.total += i?.selectedLocation.price*i?.selectedMembers?.length
          } else {
            this.total += i?.disc
          }
        } else if (i?.cstmtype==1&&i?.type==0) {
          if(i?.disc==0) {
            this.total += i?.selectedLocation.price*i?.notUserMembersCount
          } else {
            this.total += i?.disc
          }
         
        }
        if(i?.cstmtype==2) {
          this.total += i?.price*i?.countToBuy
          if(!productCharg.some(item => i.id == item.id))  productCharg.push(i)
        }
        if(i?.cstmtype==2&&i?.shipping_required=='1') activityCharg.push(i)
       
      })
      if(productCharg?.length) {
        productCharg.forEach(product =>  {
          this.shipingCharge+=product?.shipping_charge
        })
      }
      if(activityCharg?.length) {
        this.shipingCharge+=activityCharg[0]?.club_details?.shipping_charge
      }    
    }
  }
  deleteCartItem() {
    this.cartitems.splice(this.showDeleteCArtitem,1)
    localStorage.setItem('joincart',JSON.stringify(this.cartitems))
    this.showDeleteCArtitem=-1
    this.getTotal()
  }
  routeToDetailsPage(item:any) {
    if(item?.cstmtype==2) {
        this.router.navigate([`/product/${item?.id}`])
    } else if (item?.cstmtype==1)  {
      this.router.navigate([`/activity/${item?.id}`])
    }
  }
  plusone(index:any) {
    if(this.cartitems[index]?.selectedSize?.qty){
      if(this.cartitems[index]?.countToBuy<this.cartitems[index]?.selectedSize?.qty) {
        this.cartitems[index].countToBuy+=1
        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
      }
    } else {
      if(this.cartitems[index]?.countToBuy<this.cartitems[index]?.qty) {
        this.cartitems[index].countToBuy+=1
        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
      }
    }
    this.getTotal()
  }
  minusone(index:any) {
    if(this.cartitems[index]?.countToBuy==1) {
      this.showDeleteCArtitem=index
    } else  {
      if(this.cartitems[index]?.countToBuy>0) {
        this.cartitems[index].countToBuy-=1
        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
      } 
    }
    this.getTotal()
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
  selectedDataFromPopup(index,event) {
  this.cartitems[index].selectedMembers=event.selectedMembers
  this.cartitems[index].selectedLocation=event.selectedLocation,
  this.cartitems[index].selectedDate=event.selectedDate
  this.cartitems[index].selectedTime=event.selectedTime
  this.cartitems[index].cstmtype=1 
  this.cartitems[index].type=event.type
  this.cartitems[index].notUserMembersCount =event.notUserMembersCount
  localStorage.setItem('joincart',JSON.stringify(this.cartitems))
  this.showpopup=-1
  this.getTotal()
}
getpromoCode(promocode:string) {

 if(!this.promocodedisabled) {
  this.promoCodeLoading=true
  this.promocode=promocode
  this.cartService.getPromoCode().subscribe(
    res =>  { 
        this.promoCodeLoading=false
        if(Array.isArray(res)) {
          let selectedPromoCode = res.find(i => i.code.toLowerCase() == promocode.toLowerCase())
          if(!selectedPromoCode) {
            this.toastr.error(localStorage.getItem('lang')=='ar'?'لا يمكن تطبيق الخصم':'Cannot apply discount on items');
          } else {
            let today = new Date()
            let item = selectedPromoCode
            let from = new Date(item?.date_from)
            let to = new Date(item?.date_to)
            if(item?.status =='ACTIVE') {
              if (
              (this.datePipe.transform(from, 'MM-dd-yyy')==this.datePipe.transform(today, 'MM-dd-yyy')) 
              ||
              (this.datePipe.transform(to, 'MM-dd-yyy')==this.datePipe.transform(today, 'MM-dd-yyy'))
              ||
              (today > from && today < to)
            ) {
              console.log(selectedPromoCode)
              this.cartitems.forEach(item => {
                  if(item?.cstmtype==1 && selectedPromoCode?.applied_on=='all') {
                    if(selectedPromoCode?.type=='Percentage') {
                      let Percentage = selectedPromoCode?.value/100
                      if(item?.type==1 ) {        
                        let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                        item.disc = (currentPrice) - (currentPrice*Percentage)
                      } else if (item?.type==0) {
                        let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                        item.disc = (currentPrice) - (currentPrice*Percentage)
                      }
                    } else if (selectedPromoCode?.type=='Fixed') {
                      if(item?.type==1 ) {        
                        let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                        item.disc = (currentPrice) - selectedPromoCode?.value
                      } else if (item?.type==0) {
                        let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                        item.disc = (currentPrice) -  selectedPromoCode?.value
                      }
                    }
                      // end all case
                  }  else if (item?.cstmtype==1 && selectedPromoCode?.applied_on=='club' &&
                   item?.club_id == selectedPromoCode?.club_activity_id) {
                    if(selectedPromoCode?.type=='Percentage') {
                      let Percentage = selectedPromoCode?.value/100
                      if(item?.type==1 ) {        
                        let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                        item.disc = (currentPrice) - (currentPrice*Percentage)
                      } else if (item?.type==0) {
                        let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                        item.disc = (currentPrice) - (currentPrice*Percentage)
                      }
                    } else if (selectedPromoCode?.type=='Fixed') {
                      if(item?.type==1 ) {        
                        let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                        item.disc = (currentPrice) - selectedPromoCode?.value
                      } else if (item?.type==0) {
                        let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                        item.disc = (currentPrice) -  selectedPromoCode?.value
                      }
                    }
                      // end clup case
                  } else if (item?.cstmtype==1 && selectedPromoCode?.applied_on=='activity' &&
                  item?.id == selectedPromoCode?.club_activity_id) {
                   if(selectedPromoCode?.type=='Percentage') {
                     let Percentage = selectedPromoCode?.value/100
                     if(item?.type==1 ) {        
                       let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                       item.disc = (currentPrice) - (currentPrice*Percentage)
                     } else if (item?.type==0) {
                       let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                       item.disc = (currentPrice) - (currentPrice*Percentage)
                     }
                   } else if (selectedPromoCode?.type=='Fixed') {
                     if(item?.type==1 ) {        
                       let currentPrice = item?.selectedLocation.price*item?.selectedMembers?.length
                       item.disc = (currentPrice) - selectedPromoCode?.value
                     } else if (item?.type==0) {
                       let currentPrice = item?.selectedLocation.price*item?.notUserMembersCount
                       item.disc = (currentPrice) -  selectedPromoCode?.value
                     }
                   }
                     // end activity case
                 }
               this.getTotal()
               this.promocodedisabled=true
              })
            } else {
              console.log('one')
              this.toastr.error(localStorage.getItem('lang')=='ar'?'لا يمكن تطبيق الخصم':'Cannot apply discount on items');
            }
            } else {
              console.log('two')
              this.toastr.error(localStorage.getItem('lang')=='ar'?'لا يمكن تطبيق الخصم':'Cannot apply discount on items');
            }
          }
        }
        console.log(this.cartitems)
    }
  )
 }
}
checkPromoCodeInputLength(value:string) {
  let activites = this.cartitems.filter(i => i?.cstmtype==1)
  if(value.trim().length==0||!activites?.length) return true
  else return false
}
checkOut() {
  console.log(this.cartitems)
  let requestBody = {
    activity_data:[],
    child_id:[],
    booking_txn:'',
    payment_method:'PRICE',
    total:this.total,
    booking_session:[],
    shipping_charge:this.shipingCharge,
    address_id:!!localStorage.getItem('joinToken') ? this.selectedAddress?.id : '',
    device_type:'W',
    device_token:'_'
  }
  if(this.cartitems?.length) {
    for (let i = 0 ; i < this.cartitems?.length;i++) {
        if(this.cartitems[i]?.cstmtype==1) {
          let activity_data:any = {}
          activity_data.frequency = this.cartitems[i]?.selectedLocation?.frequency
          activity_data.promo_code = this.promocode
          activity_data.days_for_activity = this.cartitems[i]?.selectedLocation?.days_for_activity
          activity_data.days_for_activity = this.cartitems[i]?.selectedLocation?.branch_id
          activity_data.max_seats = this.cartitems[i]?.selectedLocation?.max_seats
          activity_data.selected_date = this.cartitems[i]?.selectedDate
          activity_data.activity_id = this.cartitems[i]?.id
           // is SUCCESS fixed value     activity_data.booking_status = 'SUCCESS'
      // is price fixed value     activity_data.booking_amount_type = 'PRICE'
       // what its value  activity_data.booking_amount = this.promocode
            // what its value  activity_data.booking_discount = this.promocode
              // what its value  activity_data.booking_payment = this.promocode
            requestBody.activity_data.push(activity_data)
           
           
            if(this.cartitems[i]?.selectedMembers?.length) {
              this.cartitems[i]?.selectedMembers.forEach(element => {
                let child_id:any = {}
                  child_id.branch_id = this.cartitems[i]?.selectedLocation?.branch_id
                  child_id.activity_id = this.cartitems[i]?.id
                  child_id.child_id = element?.child_id
                  requestBody.child_id.push(child_id)
                  let booking_session:any = {};
                  booking_session.branch_id= this.cartitems[i]?.selectedLocation?.branch_id
                  //booking_session.no_of_session= 
                  booking_session.from_time= this.cartitems[i]?.selectedTime?.from_time
                  booking_session.to_time= this.cartitems[i]?.selectedTime?.to_time
                  booking_session.club_activity_location_id= this.cartitems[i]?.selectedLocation?.id
                  booking_session.activity_id=this.cartitems[i]?.id
                  booking_session.child_id=element?.child_id
                  requestBody.booking_session.push(booking_session)
              });
            }

        } 
 
    }
  }
 
}
selectAddress(addressId) {
  this.selectedAddress = this.addresses.find(i => i?.id==addressId)
}
}
