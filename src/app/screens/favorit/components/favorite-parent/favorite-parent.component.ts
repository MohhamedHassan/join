import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';

@Component({
  selector: 'app-favorite-parent',
  templateUrl: './favorite-parent.component.html',
  styleUrls: ['./favorite-parent.component.scss']
})
export class FavoriteParentComponent implements OnInit {
  tabs:Tabs[] = 
  [
    {name_ar:'الأنشطة',name_en:'Activities',id:'1'},
    {name_ar:'الاندية',name_en:'Clubs',id:'2'},
]
  chosenTab:number=1
  constructor() { }

  ngOnInit(): void {
  }
  chosenTabFromChild(chosenTab:number) {
    this.chosenTab=chosenTab
  }
}
