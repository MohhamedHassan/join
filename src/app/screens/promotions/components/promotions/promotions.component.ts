import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../../services/promotions.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  promotions:any[]=[]
  loading=true
  constructor(private promotionsService:PromotionsService) { }

  ngOnInit(): void {
    this.promotionsService.promotions_page_Banner().subscribe(
      res =>  {
        if(res?.code) {
          console.log(res?.payload)
          this.promotions=res?.payload
          this.loading=false
        }
      }
    )
  }
  checkObjectLength(obj) {
    return Object.keys(obj).length
  }
}
