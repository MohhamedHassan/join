import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {
  loading=true
  historyDetails=null
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
}
