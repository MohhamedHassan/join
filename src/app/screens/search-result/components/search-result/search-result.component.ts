import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SearchResultService } from '../../services/search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
loading=true
searchResult:any[]=[]
  constructor(private activatedRoute:ActivatedRoute,
    private serachService:SearchResultService,
    private router:Router
    ) { }

  ngOnInit(): void {

    // this.activatedRoute.params.pipe(
    //   switchMap((params:any) => {
      
    //     return this.serachService.getSearchResult(params?.str)
    //   })
    // ).subscribe(res=> {
    //   this.searchResult=res
    //   this.loading=false
    //   console.log(res)
    // })
    this.activatedRoute.params.subscribe(
      (params:any) => {
        if(params?.str==-1) {
          this.loading=true
          this.activatedRoute.queryParamMap.subscribe(
            (res:any) => {
          if(res.params.filterbody){
            let data = JSON.parse(res.params.filterbody)[0]
            let frmdata= new FormData()
             frmdata.append('interests_id',data.interests_id.toString())
            frmdata.append('child_id',data.child_id.toString())
            frmdata.append('area_id',data.area_id.toString())
            frmdata.append('age_from',data.age_from)
            frmdata.append('age_to',data.age_to)
            frmdata.append('price_from',data.price_from)
            frmdata.append('price_to',data.price_to)
            frmdata.append('rating',data.rating)
            this.serachService.filter(frmdata).subscribe(res=> {
              this.searchResult=res
              this.searchResult.map(
                item =>  {
                  item.type='ACTIVITY'
                }
              )
              this.loading=false
            })
          }
            }
          )
        } else {
          this.loading=true
          this.activatedRoute.queryParamMap.subscribe(
            (queryparam:any) => {
              if(params?.page!=3) {
            
                this.serachService.getSearchResult(queryparam?.params?.str).subscribe(res=> {
                  this.searchResult=res
                  if(params?.page==2)  {
                    this.searchResult= this.searchResult.filter(i => i?.type=='ACTIVITY')
                  }
                  this.loading=false
                })
              } else  if(params?.page==3){
                this.serachService.productsSearch(queryparam?.params?.str).subscribe(res=> {
                  this.searchResult=res
                  this.searchResult.map(
                    item =>  {
                      item.type='PRODUCT'
                    }
                  )
                  this.loading=false
                })
              }
            })
          
        }
      }
    )
  }
  routeToDEtailsPage(item:any) {
    if(item?.type=='ACTIVITY') return `/activity/${item?.id}`
    else if(item?.type=='CLUB') return `/club/${item?.id}`
    else if(item?.type=='PRODUCT') return `/product/${item?.id}`
    else return '/notfound'
  }
}
