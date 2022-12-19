import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StoreService } from 'src/app/screens/store/services/store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  loading:boolean=true
  product_details:any

  constructor(private activatedRoute:ActivatedRoute,
    private _sanitizer:DomSanitizer,
    private storeService:StoreService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
         return this.storeService.getProductDetails(params?.id)
      })
    ).subscribe(
       res => {
        this.loading=false
        this.product_details=res
       }
    )
  }

}
