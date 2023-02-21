import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activity_price:'',
    member_count:'',
    selected_date:''
  }
  constructor(private historyServide:HistoryService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) =>  {
      this.historyServide.getHistory().subscribe(
        res=> {
          console.log(params)
          this.historyDetails=res.find(i => i?.order_id==params?.id)
          console.log(this.historyDetails)
          this.loading=false
        }
      )
    })
  }
  getPrice(pricies:any[],key:string) {
    return pricies.find(i => i?.key==key)?.value
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
  getRateData(item) {
    this.rateData.club_image=item?.club_logo
    this.rateData.club_name=item?.club_name
    this.rateData.activity_price=item?.booking_payment
    this.rateData.activity_name=item?.activity_name
    this.rateData.member_count=item?.child_count
    this.rateData.selected_date=item?.selected_date
    this.ratePopup=true
    console.log(this.rateData)
  }
}
