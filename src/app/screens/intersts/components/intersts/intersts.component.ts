import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Activities } from 'src/app/screens/home/models/activities';
import { InterstsService } from '../../services/intersts.service';
@Component({
  selector: 'app-intersts',
  templateUrl: './intersts.component.html',
  styleUrls: ['./intersts.component.scss']
})
export class InterstsComponent implements OnInit {
  activities:Activities[]=[]
  loading:boolean=true
  requestComplete:boolean=false
  favoriteLoading=false
  constructor(private activatedRoute:ActivatedRoute,
    private intersService:InterstsService) { }

    favoriteLoadingStatus(event:boolean) {
      this.favoriteLoading=event
    }
    changeFavStatus(index:any) {
      this.activities[index].favorite =   this.activities[index].favorite == 'FAVORITE' ? '' : 'FAVORITE' 
    }
    isLogin():boolean {
      return !!localStorage.getItem("joinToken")
    }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
        if(!!localStorage.getItem("joinToken")) return this.intersService.category_activitiesUser(params?.id)
        else return this.intersService.category_activitiesWeb(params?.id)
      })
    ).subscribe(
      res => {
        this.activities=res
        this.loading=false
        this.requestComplete=true
      }
    )
  }

}
