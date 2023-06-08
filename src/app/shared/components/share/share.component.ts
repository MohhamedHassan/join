import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  //links:any[] 
  @Input() link:string
  @Input() paramName:string
  @Input() paramValue:string
  @Input() endpoint:string
  loading=true
  mobileDynamicLin=''
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyC-HQXMctawLVc4uB9bt2xZVOyHrCIu9s0',{
    //   "dynamicLinkInfo": {
    //     "domainUriPrefix": "https://joinkw.page.link",
    //     "link": `https://joinkw.page.link/${this.endpoint}?${this.paramName}=${this.paramValue}`,
    //     "androidInfo": {
    //       "androidPackageName": "com.joinkw",
    //       "androidFallbackLink":`https://join.com.kw/${this.link}`,
    //     },
    //     "iosInfo": {
    //       "iosBundleId": "com.join.join",
    //       "iosFallbackLink": `https://join.com.kw/${this.link}`,
    //     }
    //   }
    // }).subscribe((res:any) =>  {
    //   this.loading=false
    //   this.mobileDynamicLin= res.shortLink
    // }, err =>  {
    //   this.loading=false
    // })
  }

}
