import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.component.html',
  styleUrls: ['./cart-one.component.scss']
})
export class CartOneComponent implements OnInit {
  @Input() imgSrc:string=''
  @Input() price:string=''
  @Input() title:string=''
  @Input() age_from:string=''
  @Input() age_to:string=''
  @Input() interests_name:string=''
  @Input() location_count:string=''
  @Input() detailsPageRoute:string=''
  @Input() show_heart:boolean=false
  @Input() heartStatus:string=''
  @Input() activityId:string=''
  @Output() favoriteLoaing = new EventEmitter()
  @Output() changefavStatus = new EventEmitter()
  @Input() activityIndex = -1
  constructor(private foavoriteService:FavoriteService) { }
  get lang() {return localStorage.getItem('lang') || 'en'}
  ngOnInit(): void {
  }
  addActivityToFavorite() {
    this.favoriteLoaing.emit(true)
    this.foavoriteService.addActivityToFavorite(this.activityId).subscribe(
      res => {
        this.favoriteLoaing.emit(false)
        if(res?.code) this.changefavStatus.emit(this.activityIndex)
      }
    )
  }
}
