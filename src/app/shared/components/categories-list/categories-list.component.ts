import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() listData:Tabs[]=[]
  @Input() currentid:any=-1
  @Output() chosenTab = new EventEmitter() 
  activeTab=-1
  constructor() { }

  ngOnInit(): void {
    if(this.currentid==0) this.activeTab=0
  }
  selectTab(chosenTab:string,index:number) {
    this.activeTab=index
    this.chosenTab.emit(chosenTab)
  }
  ngOnChanges(changes: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes?.currentid?.currentValue==0) {
      this.activeTab=0
    } else {
      this.activeTab=-1
    }
  }
  get lang() {
    return localStorage.getItem('lang') || 'en'
  }

}
