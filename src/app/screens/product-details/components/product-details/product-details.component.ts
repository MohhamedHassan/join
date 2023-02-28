import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { StoreService } from 'src/app/screens/store/services/store.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Navigation,Autoplay]); 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  sharePopup=false
  selectedColor=null
  selectedSize=null
  loading:boolean=true
  product_details:any
  countToBuy=0
  cartitems:any[]=[]
  availableCount=0
  constructor(private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    private _sanitizer:DomSanitizer,
    private storeService:StoreService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
    get lang() {return localStorage.getItem('lang')||'en'}
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
        console.log(res)
        this.selectedColor=null
        this.selectedSize=null
        this.countToBuy=0
        this.availableCount=0
        this.loading=false
        this.product_details=res?.payload
        if(this.product_details?.product_colors?.length) {
          this.selectedColor=this.product_details?.product_colors[0]
        }

        if(this.product_details?.product_sizes?.length) {
          this.selectedSize=this.product_details?.product_sizes[0]
          this.selectSize(this.selectedSize)
        } else {
          this.setAvailableInCaseNoSizes()
        }
    
        
 
        

        if(res?.code==0) this.router.navigate(['/'])
       } 
    )
  }
  selectSize(size) {
    this.selectedSize=size
    this.availableCount=size?.qty
    let chosenCount = 0
    if(this.cartitems?.length) {
      for(let i = 0 ; i <this.cartitems?.length;i++) {
        if(this.cartitems[i]?.id==this.product_details?.id&&this.cartitems[i]?.cstmtype==2) {
          if(this.product_details?.product_sizes?.length && size?.id == this.cartitems[i]?.selectedSize?.id) {
            chosenCount+=this.cartitems[i]?.countToBuy
          }         
        }
      }
    }
    if(size?.qty >= chosenCount) {
      this.availableCount=size?.qty - chosenCount
    } else if (size?.qty < chosenCount || size?.qty == "0") {
      this.availableCount=0
    } 
    console.log(chosenCount)
    if(this.availableCount>0) this.countToBuy=1
    else this.countToBuy=0

  }
  setAvailableInCaseNoSizes() {
    this.availableCount=this.product_details?.qty
    let chosenCount = 0
    if(this.cartitems?.length) {
      for(let i = 0 ; i <this.cartitems?.length;i++) {
        if(this.cartitems[i]?.id==this.product_details?.id&&this.cartitems[i]?.cstmtype==2) {
            chosenCount+=this.cartitems[i]?.countToBuy
        }
      }
    }
    if(this.product_details?.qty >= chosenCount) {
      this.availableCount=this.product_details?.qty - chosenCount
    } else if (this.product_details?.qty < chosenCount || this.product_details?.qty == "0") {
      this.availableCount=0
    } 
    console.log(chosenCount)
    if(this.availableCount>0) this.countToBuy=1
    else this.countToBuy=0
  }
  addToCart() {
    if(this.availableCount<1) this.toastrError() 
    else {
      if(this.countToBuy>0) {
        let itemExistincart = false
        this.product_details.cstmtype=2
        this.product_details.selectedColor=this.selectedColor
        this.product_details.selectedSize=this.selectedSize
        if(this.cartitems?.length) {    
         
          for(let i = 0 ; i <this.cartitems?.length;i++) {
            if(this.cartitems[i]?.id==this.product_details?.id&&this.cartitems[i]?.cstmtype==2) {
              if(this.product_details?.product_sizes?.length && this.selectedSize?.id == this.cartitems[i]?.selectedSize?.id) {
                if(this.product_details?.product_colors?.length) {
                  if(this.cartitems[i]?.selectedColor.id==this.selectedColor?.id) {
                    console.log('what!')
                    this.editCartItem(i)
                    itemExistincart=true
                  }
                } else {
                  console.log('four!')
                  this.editCartItem(i)
                  itemExistincart=true
                }
              } 
              if(!this.product_details?.product_sizes?.length) {
                console.log('trhee')
                if(this.product_details?.product_colors?.length) {
                  if(this.cartitems[i]?.selectedColor.id==this.selectedColor?.id) {
                    console.log('what!')
                    this.editCartItem(i)
                    itemExistincart=true
                  }
                } else {
                  this.editCartItem(i)
                  itemExistincart=true
                }
              }
              
            }
          }
        }
        if(!itemExistincart) {
          console.log('two')
          this.product_details.countToBuy=this.countToBuy
          this.cartitems.push(this.product_details)
          localStorage.setItem('joincart',JSON.stringify(this.cartitems))
          this.router.navigate(['/cart'])
        } 
        localStorage.setItem('joincart',JSON.stringify(this.cartitems))
        this.router.navigate(['/cart'])
       
      }
    }
  }
  editCartItem(index) {
    this.cartitems[index].countToBuy+=this.countToBuy
    this.cartitems[index].selectedColor=this.selectedColor
    this.cartitems[index].selectedSize=this.selectedSize
  }
  plusone() {
    if(this.availableCount==this.countToBuy) this.toastrError() 
    if(this.countToBuy<this.availableCount) {
      this.countToBuy+=1
    }
  }
  minusone() {
    if(this.countToBuy>0) {
      this.countToBuy-=1
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
