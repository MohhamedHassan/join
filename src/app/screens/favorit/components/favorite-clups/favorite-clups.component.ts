import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-clups',
  templateUrl: './favorite-clups.component.html',
  styleUrls: ['./favorite-clups.component.scss']
})
export class FavoriteClupsComponent implements OnInit {
  favoriteLoading=false
  favoriteClups:any[]=[]
  loading=true
  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.getClupFavorite()
  }
  getClupFavorite() {
    this.loading=true
    this.favoriteService.getClupFavorite().subscribe(res =>  {
      if(Array.isArray(res.payload)) {
        this.favoriteClups = res.payload
      }
      this.loading=false
    })
  }
  isLogin():boolean {
    return !!localStorage.getItem("joinToken")
  }
  favoriteLoadingStatus(event:boolean) {
    this.favoriteLoading=event
  }
  changeFavStatus(index:any) {
    this.getClupFavorite()
  }
}
