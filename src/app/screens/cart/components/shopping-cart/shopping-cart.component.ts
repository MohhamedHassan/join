import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/screens/auth/services/auth.service';
import { CartService } from '../../sertvies/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  paymentFaild=false
  paymenSuccess=false
  profileData
  notuserdataSubmited=false
  checkoutLoading=false
  notAvailableitems=''
  chosenPayment='1'
  addressRequired=0
  submitedCheckout=false
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
  notUserDataForm:FormGroup
  submited=false
  userid=null
  selectedAddress=null
  promocode=''
  notUserData=null
  notUserDataPopup=false
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
      formvalue.id=this.addresses?.length+1
      this.addresses.push(formvalue)
      this.addAddressPopup=false
    }
  
    }
  }
  addnotuserData() {
    this.notuserdataSubmited=true
    if(this.notUserDataForm.valid) {
      localStorage.setItem('not_user_data',JSON.stringify(this.notUserDataForm.value))
      this.notUserDataPopup=false
    }
  }
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
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
    this.activatedRoute.queryParamMap.subscribe((res:any) => {
      console.log(res?.params?.type)
      let cart = localStorage.getItem('joincart')
      if(cart)  {
        this.cartitems=JSON.parse(cart)
      }
      if(this.cartitems?.length&&res?.params?.type==0) {
        this.paymentFaild=true
      } 
      if(this.cartitems?.length&&res?.params?.type==1) {
        this.paymenSuccess=true
        this.createBooking()
      } 
    })
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
    this.notUserDataForm = this.fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
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
          
            this.profileData=res
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
      this.addressRequired=0
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
        if(i?.cstmtype==1&&i?.shipping_required=='1') activityCharg.push(i)
       
      })
      if(productCharg?.length) {
        productCharg.forEach(product =>  {
          this.shipingCharge+=Number(product?.shipping_charge)
        })
        this.addressRequired=1
      }
      if(activityCharg?.length) {
        this.shipingCharge+=Number(activityCharg[0]?.club_details?.shipping_charge)
        this.addressRequired=1
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
createBooking() {
  console.log(this.cartitems)
  let requestBody = {
    activity_data:[],
    child_id:[], 
    booking_txn:'',
    payment_method:'PRICE',
    total:this.total+this.shipingCharge,
    booking_session:[],
    shipping_charge:this.shipingCharge,
    address_id:!!localStorage.getItem('joinToken') ? (this.selectedAddress?.id||'') : '',
    device_type:'W',
    device_token:'_',
    store:[],
    guset_child:[],
    fname:this.profileData?.fname || this.notUserData?.name,
    lname:this.profileData?.lname || '',
    age:'',
    mobile:this.profileData?.mobile || this.notUserData?.phone,
    email:this.profileData?.email || this.notUserData?.email,
    title:this.selectedAddress?.title||'',
    area_name:this.selectedAddress?.area_name||'',
    area_id:this.selectedAddress?.area_id||'',
    block:this.selectedAddress?.block||'',
    street:this.selectedAddress?.street||'',
    building:this.selectedAddress?.building||'',
    floor:this.selectedAddress?.floor||'',
    apartment:this.selectedAddress?.apartment||'',
  }

  if(this.cartitems?.length) {
    for (let i = 0 ; i < this.cartitems?.length;i++) {
        if(this.cartitems[i]?.cstmtype==1) {
          let activity_data:any = {}
          activity_data.frequency = this.cartitems[i]?.selectedLocation?.frequency
          activity_data.promo_code = this.promocode
          activity_data.days_for_activity = this.cartitems[i]?.selectedLocation?.days_for_activity
          activity_data.branch_id = this.cartitems[i]?.selectedLocation?.branch_id
          activity_data.max_seats = this.cartitems[i]?.selectedLocation?.max_seats
          activity_data.selected_date = this.cartitems[i]?.selectedDate
          activity_data.activity_id = this.cartitems[i]?.id
             // not available value from down
              activity_data.booking_status = 'SUCCESS'
              activity_data.booking_amount_type = 'PRICE'
               activity_data.booking_amount = '200'
               activity_data.booking_discount =  '10'
              activity_data.booking_payment = '300'
            requestBody.activity_data.push(activity_data)

          //  end activity_data
            if(this.cartitems[i]?.selectedMembers?.length) {
              this.cartitems[i]?.selectedMembers.forEach(element => {
                let child_id:any = {}
                  child_id.branch_id = this.cartitems[i]?.selectedLocation?.branch_id
                  child_id.activity_id = this.cartitems[i]?.id
                  child_id.child_id = element?.child_id
                  requestBody.child_id.push(child_id)
                        //  end child_id
                  let booking_session:any = {};
                  booking_session.branch_id= this.cartitems[i]?.selectedLocation?.branch_id
                  booking_session.no_of_session= '' //// what value ????
                  booking_session.from_time= this.cartitems[i]?.selectedTime?.from_time
                  booking_session.to_time= this.cartitems[i]?.selectedTime?.to_time
                  booking_session.club_activity_location_id= this.cartitems[i]?.selectedLocation?.id
                  booking_session.activity_id=this.cartitems[i]?.id
                  booking_session.child_id=element?.child_id
                  requestBody.booking_session.push(booking_session)
                  // end booking_session
              });
            }
            if(!!localStorage.getItem('joinToken')==false && this.cartitems[i]?.notUserMembersCount) {
              for(let x = 0 ;x < this.cartitems[i]?.notUserMembersCount;x++) {
                let obj = {
                  branch_id:this.cartitems[i]?.selectedLocation?.branch_id,
                  activity_id:this.cartitems[i]?.id,
                  gender:'',
                  fullname:this.notUserData?.name||'',
                  email:this.notUserData?.email||'',
                  age:'',
                  mobile:this.notUserData?.phone||'',
                }
                requestBody.guset_child.push(obj)
              }
            }
               //  end guest_child
        } else if(this.cartitems[i]?.cstmtype==2) {
          let storeItem:any = {}
          storeItem.product_id=this.cartitems[i]?.id,
          storeItem.qty=this.cartitems[i]?.countToBuy,
          storeItem.color=this.cartitems[i]?.selectedColor?.id || '',
          storeItem.size=this.cartitems[i]?.selectedSize?.id || '',
          storeItem.booking_status="PENDING",
          requestBody.store.push(storeItem)
          // end store
        }
 
    }
  }

  let formdata = new FormData()
  for (let i in requestBody) {
    formdata.append(i,JSON.stringify(requestBody[i]))
  }
  console.log(requestBody)
  this.cartService.creatBooking(formdata).subscribe(
    res =>  {
      if(res?.type=="SUCCESS") {
        this.toastr.success(localStorage.getItem('lang')=='ar'?'تم تنفيذ طلبك بنجاح':'Your request has been successfully processed');
        localStorage.setItem('joincart',JSON.stringify([]))
        this.router.navigate(['/history'])
      }
    } 
  )
}
checkAvailableSeats() {
  console.log(this.profileData?.fname || this.notUserData?.name)
  this.checkoutLoading=true
  let availableSeatsRequestBody = {
    activity_data:[],
    child_id:[],
    payment_method:'PRICE',
    total:this.total+this.shipingCharge,
    booking_session:[],
    club_id:0,
    store:[],
  }
  if(this.cartitems?.length) {
    for (let i = 0 ; i < this.cartitems?.length;i++) {
        if(this.cartitems[i]?.cstmtype==1) {
          let activity_data:any = {}
          activity_data.frequency = this.cartitems[i]?.selectedLocation?.frequency
          activity_data.promo_code = this.promocode
          activity_data.days_for_activity = this.cartitems[i]?.selectedLocation?.days_for_activity
          activity_data.branch_id = this.cartitems[i]?.selectedLocation?.branch_id
          activity_data.max_seats = this.cartitems[i]?.selectedLocation?.max_seats
          activity_data.selected_date = this.cartitems[i]?.selectedDate
          activity_data.activity_id = this.cartitems[i]?.id
          // not available value from down
               activity_data.booking_status = 'SUCCESS'
              activity_data.booking_amount_type = 'PRICE'
               activity_data.booking_amount = '0.0'
               activity_data.booking_discount =  '0.0'
              activity_data.booking_payment = '0.0'
              availableSeatsRequestBody.activity_data.push(activity_data)

          //////////// end activity_data

          if(this.cartitems[i]?.selectedMembers?.length) {
            this.cartitems[i]?.selectedMembers.forEach(element => {
              let child_id:any = {}
                child_id.branch_id = this.cartitems[i]?.selectedLocation?.branch_id
                child_id.activity_id = this.cartitems[i]?.id
                child_id.child_id = element?.child_id
                availableSeatsRequestBody.child_id.push(child_id)
                  //////////// end child_id
                  

                let booking_session:any = {};
                booking_session.branch_id= this.cartitems[i]?.selectedLocation?.branch_id
                booking_session.no_of_session= '' //// what value ????
                booking_session.from_time= this.cartitems[i]?.selectedTime?.from_time
                booking_session.to_time= this.cartitems[i]?.selectedTime?.to_time
                booking_session.club_activity_location_id= this.cartitems[i]?.selectedLocation?.id
                booking_session.activity_id=this.cartitems[i]?.id
                booking_session.child_id=element?.child_id
                booking_session.selected_date=this.cartitems[i]?.selectedDate
                booking_session.max_seats= this.cartitems[i]?.selectedLocation?.max_seats
                availableSeatsRequestBody.booking_session.push(booking_session)
                 //////////// end booking_session


             
            });
          }
      
        }  else if(this.cartitems[i]?.cstmtype==2) {
          let storeItem:any = {}
          storeItem.type="product"
          storeItem.product_id=this.cartitems[i]?.id,
          storeItem.qty=this.cartitems[i]?.countToBuy,
          storeItem.color=this.cartitems[i]?.selectedColor?.id || '',
          storeItem.size=this.cartitems[i]?.selectedSize?.id || '',
          storeItem.booking_status="PENDING",
          storeItem.price=this.cartitems[i]?.price,
          storeItem.price_type="PRICE",
          storeItem.booking_discount="0.0",
          storeItem.promo_code=this.promocode
          availableSeatsRequestBody.store.push(storeItem)
        }
  
    }
  }
  let formdata = new FormData()
  for (let i in availableSeatsRequestBody) {
    formdata.append(i,JSON.stringify(availableSeatsRequestBody[i]))
  }
  this.cartService.checkAvailableSeats(formdata).subscribe(
    res =>  {
      if(res?.payload?.items&&res?.type=='SUCCESS') {
        this.notAvailableitems = res?.payload?.items
        this.checkoutLoading=false
      }
      else if(!res?.payload?.items&&res?.type=='SUCCESS') {
        this.notAvailableitems = ''
      this.cartService.paymentRequest({
        "PaymentMethodId": Number(this.chosenPayment),
        "CustomerName": this.profileData?.fname || this.notUserData?.name,
        "DisplayCurrencyIso": "KWD",
        "MobileCountryCode": "+965",
        "CustomerMobile": this.profileData?.mobile || this.notUserData?.phone,
        "CustomerEmail": this.profileData?.email || this.notUserData?.email,
        "InvoiceValue": Number(this.total+this.shipingCharge),
        "Language": "Ar",
        "CallBackUrl": "http://localhost:4200/#/cart?type=1",
        "ErrorUrl": "http://localhost:4200/#/cart?type=0",
      }).subscribe(
        res =>  {
          console.log(res)
          if(res?.IsSuccess) {
            window.open(res?.Data?.PaymentURL, '_blank');
            this.checkoutLoading=false
          }
        },err => {
          this.checkoutLoading=false
        }
      )
      }
    } 
  )
}
checkout() {
  this.submitedCheckout=true
  this.notUserData=JSON.parse(localStorage.getItem('not_user_data'))
  if(!!localStorage.getItem('joinToken')==false && !this.notUserData) {
    this.notuserdataSubmited=false
    this.notUserDataForm.reset()
    this.notUserDataPopup=true
    console.log(    this.notUserDataPopup)
  } else {
    if((this.addressRequired&&this.selectedAddress)||!this.addressRequired) {
      this.checkAvailableSeats()
    } 
  } 
}
selectAddress(addressId) {
  this.selectedAddress = this.addresses.find(i => i?.id==addressId)
  console.log(this.selectedAddress)
}
}
