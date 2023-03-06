import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ClupDetailsService, clup_details } from '../../services/clup-details.service';
@Component({
  selector: 'app-clup-details',
  templateUrl: './clup-details.component.html',
  styleUrls: ['./clup-details.component.scss']
})
export class ClupDetailsComponent implements OnInit {
  sharePopup=false
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  active:number=0
  loading:boolean=true
  clup_details!:clup_details
  clupActivites:any
  swpieroptions: any = {
    slidesPerView: 3,
    spaceBetween: "50",
    pagination: false,
    navigation: "true",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    }
  
  }
  products=[]
  markers=[]
  constructor(private activatedRoute:ActivatedRoute,
    private _sanitizer:DomSanitizer,
    private router:Router,
    private clupsService:ClupDetailsService) { }
    savedHtml(content:string) {
      return this._sanitizer.bypassSecurityTrustHtml(content)
    }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params:any) => {
        if(!!localStorage.getItem("joinToken")) return this.clupsService.getClupDetailsForUser(params?.id)
        else return this.clupsService.getClupDetailsForGuest(params?.id)
      })
    ).subscribe(
       res => {
        this.loading=false
        this.clup_details=res
        this.products=res?.products ?  res?.products : []
        if(this.clup_details?.club_branch?.length) {
          this.center = {
            lat: Number(this.clup_details?.club_branch[0]?.latitude),
            lng: Number(this.clup_details?.club_branch[0]?.longitude)
          };
          this.clup_details?.club_branch.forEach(i =>  {
            this.markers.push({
              position: {
                lat: Number(i?.latitude),
                lng: Number(i?.longitude)
              },
              options: { animation: google.maps.Animation.BOUNCE }
            })
          })

        }
       } , err =>  {
        this.router.navigate(['/'])
       }
    )
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}
gallaryOrReviews(selected:number) {
    this.active=selected

}
}
