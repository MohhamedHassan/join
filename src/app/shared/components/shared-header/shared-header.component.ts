import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {
  @Input() header:string=''
  constructor() { }

  ngOnInit(): void {
  }
  get  lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
