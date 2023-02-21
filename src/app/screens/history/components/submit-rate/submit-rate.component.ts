import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-rate',
  templateUrl: './submit-rate.component.html',
  styleUrls: ['./submit-rate.component.scss']
})
export class SubmitRateComponent implements OnInit {
  @Input() rateData:any
  constructor() { }

  ngOnInit(): void {
  }

}
