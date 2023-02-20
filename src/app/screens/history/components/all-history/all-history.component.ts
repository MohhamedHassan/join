import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-all-history',
  templateUrl: './all-history.component.html',
  styleUrls: ['./all-history.component.scss']
})
export class AllHistoryComponent implements OnInit {
  loading=true
  history:any[]=[]
  items=[]
  constructor(private historyServide:HistoryService) { }

  ngOnInit(): void {
    this.items.length=10
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
  }
getTotal(pricies:any[]) {
  return pricies.find(i => i?.key=='Total Amount' || i?.key=='المبلغ الإجمالي')?.value
}
createItemClubsImaged() {

}
get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
