import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';
import { StoreService } from '../../services/store.service';
import { map, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ClupDetailsService } from 'src/app/screens/clup-details/services/clup-details.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  tabs: Tabs[] = []
  products: Product[] = []
  loading: boolean = true
  requestCompleted: boolean = false
  showmore=true
  currentPage=1
  categoryid:any=0
  showLess=false
  clubid='0'
  constructor(private storeSerive: StoreService,
    private clupsService:ClupDetailsService,
    private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe(
      (res:any) =>  { 
        // if (res?.params?.id) this.categoryid=res?.params?.id
        // else this.categoryid=0
        if (res?.params?.clubid) this.clubid=res?.params?.clubid
        this.loading=true
        this.requestCompleted=false
        this.products=[]
        this.storeSerive.getStoreTabs(this.clubid)
        .pipe(
          map(value => {
            this.tabs = value?.payload?.data
            this.tabs.unshift({
              id:'0',
              name_ar:"الكل",
              name_en:'All' 
            })
            return this.tabs 
          }),
          switchMap((value: Tabs[]) => {

            return this.storeSerive.getCategoryById('0',1,this.clubid)
            

          
          })
        ).subscribe(
          (res:any) => {
            this.loading = false
            this.requestCompleted = true
            if (Array.isArray(res)) this.products = res
          }
        )
      }
    )
  }
 
  categoryIdFromParent(event:any) {
  
    this.categoryid=event
    this.currentPage=1
    this.showmore=true
    this.getCategoryById(event)
  }
  getCategoryById(categoryId:string) {
    this.products=[]
    this.loading=true
    this.requestCompleted=false
    this.storeSerive.getCategoryById(categoryId,1,this.clubid).subscribe(
      res => {
        this.loading = false
        this.requestCompleted = true
        if (Array.isArray(res)) this.products = res

      }
    )
  }
  showMore() {
    this.currentPage+=1
    this.loading=true
    this.requestCompleted=false
    if(this.showLess) {
      this.products=[]
      window.scroll(0,0)
    }
    this.showLess=false
    this.storeSerive.getCategoryById(this.categoryid,this.currentPage,this.clubid).subscribe(
      res => {
        this.loading = false
        this.requestCompleted = true
        if (Array.isArray(res) && res?.length) this.products = [...this.products,...res]
        else {
          //this.showmore=false
        }
        if(this.currentPage>1&&res?.length==0) {
          this.currentPage=0
          this.showLess=true
        }
      }
    )
  }
}
