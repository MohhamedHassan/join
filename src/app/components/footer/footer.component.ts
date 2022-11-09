import { Component, OnInit } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerCart:any[]=[

  ]
  hideFooter:boolean=false
  constructor(    private glopalService:GlopalService) { }

  ngOnInit(): void {
    this.footerCart.length=3
    this.glopalService.hideNavbarAndFooter.subscribe(
      res=> {
        this.hideFooter=res
      }
    )
  }

}
