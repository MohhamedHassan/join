import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() listData:Tabs[]=[]
  @Output() chosenTab = new EventEmitter() 
  activeTab=0
  constructor() { }

  ngOnInit(): void {
  }
  selectTab(chosenTab:string,index:number) {
    this.activeTab=index
    this.chosenTab.emit(chosenTab)
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }
}
