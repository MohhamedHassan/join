import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  //links:any[] 
  @Input() link:string
  constructor() { }

  ngOnInit(): void {
    console.log(this.link)
    // this.links=[
    //   {
    //     icon:'fa-brands fa-facebook-f',
    //     link:`https://www.facebook.com/sharer/sharer.php?u=${this.link}`,
    //     color:'#1877F2'
    //   },
    //   {
    //     icon:'fa-brands fa-twitter',
    //     link:`https://twitter.com/intent/tweet?url=${this.link}`,
    //     color:'#1DA1F2'
    //   },
    //   {
    //     icon:'fa-brands fa-linkedin',
    //     link:`https://www.linkedin.com/sharing/share-offsite/?url=${this.link}`,
    //     color:'#0A66C2'
    //   },
    //   {
    //     icon:'fa-brands fa-telegram',
    //     link:`https://t.me/share/url?url=${this.link}`,
    //     color:'#29A9EB'
    //   },
    //   {
    //     icon:'fa-brands fa-whatsapp',
    //     link:`https://web.whatsapp.com/send?text=${this.link}`,
    //     color:'#55F571'
    //   },
    //   {
    //     icon:'fa-brands fa-viber',
    //     link:`viber://forward?text=${this.link}`,
    //     color:'#685EB3'
    //   }
    // ]
  }

}
