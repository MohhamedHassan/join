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
    this.activatedRoute.queryParamMap.subscribe(
      (params:any) => {
      console.log(JSON.parse(params.params.test))
      }
    )
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
      
        return this.serachService.getSearchResult(params?.str)
      })
    ).subscribe(res=> {
      this.searchResult=res
      this.loading=false
      console.log(res)
    })
  }
  routeToDEtailsPage(item:any) {
    if(item?.type=='ACTIVITY') return `/activity/${item?.id}`
    else if(item?.type=='CLUB') return `/clup/${item?.id}`
    else return '/notfound'
  }
}
