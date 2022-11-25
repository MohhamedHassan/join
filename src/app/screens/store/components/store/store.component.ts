import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/models/tabs';
import { StoreService } from '../../services/store.service';
import { map, switchMap } from 'rxjs';
import { Product } from '../../models/product';
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
  constructor(private storeSerive: StoreService) { }

  ngOnInit(): void {
    this.getStoreTabs()
  }
  getStoreTabs() {
    this.storeSerive.getStoreTabs()
      .pipe(
        map(value => this.tabs = value?.payload?.data),
        switchMap((value: Tabs[]) => {
          if (this.tabs.length) {
            return this.storeSerive.getCategoryById(this.tabs[0]?.id)
          }
          return this.storeSerive.getCategoryById('0')
        })
      ).subscribe(
        res => {
          this.loading = false
          this.requestCompleted = true
          if (Array.isArray(res)) this.products = res
        }
      )
  }
  getCategoryById(categoryId:string) {
    this.products=[]
    this.loading=true
    this.requestCompleted=false
    this.storeSerive.getCategoryById(categoryId).subscribe(
      res => {
        this.loading = false
        this.requestCompleted = true
        if (Array.isArray(res)) this.products = res
      }
    )
  }
}
