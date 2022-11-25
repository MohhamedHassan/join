import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clup-card',
  templateUrl: './clup-card.component.html',
  styleUrls: ['./clup-card.component.scss']
})
export class ClupCardComponent implements OnInit {
  @Input() imgSrc:string=''
  @Input() name:string=''
  @Input() route:string=''
  @Input() location_count:string=''
  constructor() { }
  ngOnInit(): void {
        
  }
  isLogin() {
    return !!localStorage.getItem("joinToken")
  }
}
