import { Component, OnInit } from '@angular/core';
import { Clups } from '../../models/clups';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-clups',
  templateUrl: './home-clups.component.html',
  styleUrls: ['./home-clups.component.scss']
})
export class HomeClupsComponent implements OnInit {

  clups:Clups[]=[]
  favoriteLoading=false
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.clups.subscribe((res) => {
      if(Array.isArray(res)) {
        this.clups=res
      }
    })
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  favoriteLoadingStatus(event:boolean) {
    this.favoriteLoading=event
  }
  changeFavStatus(index:any) {
    this.clups[index].favorite =   this.clups[index].favorite == 'FAVORITE' ? '' : 'FAVORITE' 
  }
}
