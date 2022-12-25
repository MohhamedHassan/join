import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  countToBuy=0
  cartitems:any=[]
  availableCount=0
  constructor(private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    private _sanitizer:DomSanitizer,
    private storeService:StoreService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    let cart = localStorage.getItem('joincart')
    if(cart)  {
      this.cartitems=JSON.parse(cart)
    }
    console.log(this.cartitems)
 
    this.activatedRoute.params.pipe(
      
      switchMap((params:any) => {
        this.loading=true
         return this.storeService.getProductDetails(params?.id)
      })
    ).subscribe(
       (res:any) => {
        this.loading=false
        this.product_details=res
        this.availableCount=this.product_details?.qty
        console.log(this.product_details)
 
        if(this.cartitems?.length) {
          for(let i = 0 ; i <this.cartitems?.length;i++) {
            if(this.cartitems[i]?.id==this.product_details?.id&&this.cartitems[i]?.cstmtype==2) {
              if(this.product_details?.qty< this.cartitems[i]?.countToBuy) {
                this.countToBuy=1
                this.cartitems[i].countToBuy=1
                localStorage.setItem('joincart',JSON.stringify(this.cartitems))
              } else {
                this.availableCount=     this.product_details?.qty-this.cartitems[i]?.countToBuy
              }
              break
            }
          }
        }
        if(this.availableCount>0) {
          this.countToBuy=1
        }
        if(res?.code==0) this.router.navigate(['/'])
       } 
    )
  }
  addToCart() {
    if(this.availableCount<1) this.toastrError() 
    else {
      if(this.countToBuy>0) {
        let itemExistincart = false
        this.product_details.cstmtype=2
        if(this.cartitems?.length) {    
         
          for(let i = 0 ; i <this.cartitems?.length;i++) {
            if(this.cartitems[i]?.id==this.product_details?.id&&this.cartitems[i]?.cstmtype==2) {
              this.cartitems[i].countToBuy+=this.countToBuy
              itemExistincart=true
              break
            }
          }
        }
        if(!itemExistincart) {
          this.product_details.countToBuy=this.countToBuy
          this.cartitems.push(this.product_details)
        }

        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
        this.router.navigate(['/cart'])
      }
    }
  }
  plusone() {
    if(this.availableCount<1) this.toastrError() 
    else {
      if(this.countToBuy<this.availableCount) {
        this.countToBuy+=1
      }
    }
  }
  minusone() {
    if(this.availableCount<1) this.toastrError() 
    else {
      if(this.countToBuy>0) {
        this.countToBuy-=1
      } 
    }
  }

  toastrError() 
  {
    if(localStorage.getItem('lang')=='ar') {
      this.toastr.error('انتهي من المخزن')
    } else {
      this.toastr.error('Out of stock')
    }
  }
}
