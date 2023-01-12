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
  constructor(private historyServide:HistoryService) { }

  ngOnInit(): void {
    this.historyServide.getHistory().subscribe(
      res=> {
        this.history=res
        this.loading=false
      }
    )
  }
getTotal(pricies:any[]) {
  return pricies.find(i => i?.key=='Total Amount')?.value
}
}
