import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-activities',
  templateUrl: './favorite-activities.component.html',
  styleUrls: ['./favorite-activities.component.scss']
})
export class FavoriteActivitiesComponent implements OnInit {
  favoriteActivities:any[]=[]
  loading=true
  favoriteLoading=false
  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.GetActivityFavorite()
  }
  GetActivityFavorite() {
    this.loading=true
    this.favoriteService.GetActivityFavorite().subscribe(res =>  {
      if(Array.isArray(res.payload)) {
        this.favoriteActivities = res.payload
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
    this.GetActivityFavorite()
  }
}
