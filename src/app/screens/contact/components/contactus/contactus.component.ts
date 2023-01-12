import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  loading=true
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading=false
    },1000)
  }

}
