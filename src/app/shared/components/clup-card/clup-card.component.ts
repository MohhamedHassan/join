import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

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
  @Input() show_heart:boolean=false
  @Input() heartStatus:string=''
  @Input() clupId:string=''
  @Output() favoriteLoaing = new EventEmitter()
  @Output() changefavStatus = new EventEmitter()
  @Input() clupIndex = -1
  @Input() has_products = false
  @Input() branch:any[]=[]
  constructor(private foavoriteService:FavoriteService) { }
  ngOnInit(): void {
        
  }
  isLogin() {
    return !!localStorage.getItem("joinToken")
  }
  addClupToFavorite() {
    this.favoriteLoaing.emit(true)
    this.foavoriteService.addClupToFavorite(this.clupId).subscribe(
      res => {
        this.favoriteLoaing.emit(false)
        if(res?.code==1) this.changefavStatus.emit(this.clupIndex)
      }
    )
  }
}

