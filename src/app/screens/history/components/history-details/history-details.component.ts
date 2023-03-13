import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {
  map=false
  latitude
  longitude
  loading=true
  historyDetails=null
  ratePopup=false
  rateData = {
    club_image:'',
    club_name:'',
    activity_name:'',
    activity_id:'',
    activity_price:'',
    member_count:'',
    selected_date:''
  }
  history=[]
  constructor(private historyServide:HistoryService,
    private cartService:CartService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((params:any) =>  {
        if(!!localStorage.getItem('joinToken')) {
          this.historyServide.getHistory().subscribe(
            res=> {
              this.historyDetails=res.find(i => i?.order_id==params?.id)
              if(!this.historyDetails&&res?.length)      this.historyDetails=res[0]
              this.loading=false
            }
          )
        }  else {


          let guestHistory = JSON.parse(localStorage.getItem('guestHistory')) || []
          if(guestHistory?.length) {

            guestHistory.forEach(element =>  {
              let item = {
                booked_activity: [],
                booked_products:[],
                created_at: new Date(),
                order_id:'',
                total:0,
                shipping:0,
                prices:[]
              }
                element.details.forEach(i => {
                  if(i?.cstmtype == 1) item.booked_activity.push(i)
                  if(i?.cstmtype == 2) item.booked_products.push(i)
                  item.order_id=i?.order_id
                  item.total=i?.total
                  item.shipping=i?.shipp
                });
                this.history.push(item)
            })
    
            this.historyDetails=this.history.find(item => item?.order_id == params?.id)
          }




          if(this.historyDetails?.booked_activity?.length) {
            this.historyDetails?.prices?.push({
              key:localStorage.getItem('lang')=='ar' ? 'إجمالي الانشطة' :'Activity Total',
              value:this.getTotalActivities()
            })
          }
          if(!!this.getActivitiesDiscount()) {
            this.historyDetails?.prices?.push({
              key:localStorage.getItem('lang')=='ar' ? 'خصم الانشطة' :'Activity Discount',
              value:this.getActivitiesDiscount()
            })
          }
          if(this.historyDetails?.booked_products?.length) {
            this.historyDetails?.prices?.push({
              key:localStorage.getItem('lang')=='ar' ? 'إجمالي المنتجات' :'Store Total',
              value:this.getTotalProducts()
            })
          }
          if(!!this.getDiscountProducts) {
            this.historyDetails?.prices?.push({
              key:localStorage.getItem('lang')=='ar' ? 'خصم المنتجات' :'Store Discount',
              value:this.getDiscountProducts()
            })
          }
          this.historyDetails?.prices?.push({
            key:localStorage.getItem('lang')=='ar' ? 'رسوم التوصيل' :'Delivery Charges',
            value:this.historyDetails?.shipping
          })
          this.historyDetails?.prices?.push({
            key:localStorage.getItem('lang')=='ar' ? 'المبلغ الإجمالي' :'Total Amount',
            value:this.historyDetails?.total
          })
          console.log(this.historyDetails)
          this.loading=false
         
        }

      })
   
  
 
  }
getTotalActivities() {
  if(this.historyDetails?.booked_activity?.length) {
    let price = 0 
    this.historyDetails?.booked_activity.forEach(item => {
      price+= (item?.selectedLocation.price * item?.notUserMembersCount) 
    });
    return price
  }else return 0
}
getActivitiesDiscount() {
  if(this.historyDetails?.booked_activity?.length) {
    let price = 0 
    this.historyDetails?.booked_activity.forEach(item => {
      price+= (item?.disc<0)? 0 : item?.disc
    });
    return price==0?0:this.getTotalActivities() -price
  }else return 0
}
getTotalProducts() {
  if(this.historyDetails?.booked_products?.length) {
    let price = 0 
    this.historyDetails?.booked_products.forEach(item => {
      price+=item?.price*item?.countToBuy
    });
    return  price
  }else return 0
}
getDiscountProducts() {
  if(this.historyDetails?.booked_products?.length) {
    let price = 0 
    this.historyDetails?.booked_products.forEach(item => {
      price+= (item?.disc<0)? 0 : item?.disc
    });
    return  price==0?0:this.getTotalProducts() -price
  }else return 0
}
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
  getRateData(item) {
    this.rateData.club_image=item?.club_logo
    this.rateData.club_name=item?.club_name
    this.rateData.activity_id=item?.activity_id
    this.rateData.activity_price=item?.booking_payment
    this.rateData.activity_name=item?.activity_name
    this.rateData.member_count=item?.child_count
    this.rateData.selected_date=item?.selected_date
    this.ratePopup=true
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
}
