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
  clubid='-1'
  constructor(private storeSerive: StoreService,
    private clupsService:ClupDetailsService,
    private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStoreTabs()
  }
  getStoreTabs() {
    this.activatedroute.queryParamMap.subscribe(
      (res:any) =>  { 
        if (res?.params?.id) this.categoryid=res?.params?.id
        if (res?.params?.clubid) this.clubid=res?.params?.clubid
        else this.categoryid=0
        this.loading=true
        this.requestCompleted=false
        this.products=[]
        this.storeSerive.getStoreTabs()
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
            console.log(this.tabs)
            if(this.clubid!='-1') {
              if(!!localStorage.getItem("joinToken")) return this.clupsService.getClupDetailsForUser(this.clubid)
              else return this.clupsService.getClupDetailsForGuest(this.clubid)
            } else {
              if(this.categoryid==0) {
                if (this.tabs.length) {
                  this.categoryid=this.tabs[0]?.id
                  return this.storeSerive.getCategoryById(this.tabs[0]?.id,1)
                }
                this.categoryid=0
                return this.storeSerive.getCategoryById('0',1)
              } else {
                return this.storeSerive.getCategoryById(this.categoryid,1)
              }
            }

          
          })
        ).subscribe(
          (res:any) => {
            this.loading = false
            this.requestCompleted = true
            if (Array.isArray(res)&&this.clubid=='-1') this.products = res
            else    this.products=res?.products ?  res?.products : []
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
    this.storeSerive.getCategoryById(categoryId,1).subscribe(
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
    this.storeSerive.getCategoryById(this.categoryid,this.currentPage).subscribe(
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
