import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/screens/cart/sertvies/cart.service';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-all-history',
  templateUrl: './all-history.component.html',
  styleUrls: ['./all-history.component.scss']
})
export class AllHistoryComponent implements OnInit {
  loading=true
  history:any[]=[]
  constructor(private historyServide:HistoryService,
    private cartService:CartService) { }
    isLogin():boolean {
      return !!localStorage.getItem("joinToken")
    }
  ngOnInit(): void {
    if(!!localStorage.getItem('joinToken')) {
      this.historyServide.getHistory().subscribe(
        res=> {
          this.history=res
          this.history.map(i => {
            i.images = []
            if(i?.booked_activity?.length) i.images.push(i?.booked_activity[0])
            if(i?.booked_products?.length) {
              i?.booked_products.forEach(element => {
                  if(!i.images.some(item => item?.club_id == element?.club_id)) i.images.push(element)
              });
            }
          })
          
          this.loading=false
        }
      )
    } else {
      if(this.cartService.notUserHistory?.length) {
        let item = {
          booked_activity: [],
          booked_products:[],
          created_at: new Date(),
          order_id:'',
          total:0
        }
        this.cartService.notUserHistory.forEach(i =>  {
          if(i?.cstmtype == 1) item.booked_activity.push(i)
          if(i?.cstmtype == 2) item.booked_products.push(i)
          item.order_id=i?.order_id
          item.total=i?.total
        })
        this.history.push(item)
      }
      
      this.loading=false
      console.log(this.cartService.notUserHistory)
    }
    
  }
getTotal(pricies:any[]) {
  if(this.isLogin()) return pricies.find(i => i?.key=='Total Amount' || i?.key=='المبلغ الإجمالي')?.value
  else return this.history[0]?.total
}

get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
