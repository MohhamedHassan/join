import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Intersts } from '../../models/intersts';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-intersts',
  templateUrl: './home-intersts.component.html',
  styleUrls: ['./home-intersts.component.scss']
})
export class HomeInterstsComponent implements OnInit {

  intersts:Intersts[]=[]
  constructor(public homeService:HomeService,
    private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    //this.homeService.getIntersts()
    this.homeService.intersts.subscribe((res) => {
      if(Array.isArray(res)) {
        this.cd.detectChanges()
        this.intersts=res
      }
    })
  }

}
