import { Component, OnInit } from '@angular/core';
import { GlopalService } from 'src/app/services/glopal.service';

@Component({
  selector: 'app-auth-parent',
  templateUrl: './auth-parent.component.html',
  styleUrls: ['./auth-parent.component.scss']
})
export class AuthParentComponent implements OnInit {

  constructor(private glopalService:GlopalService) { }

  ngOnInit(): void {
    this.glopalService.hideNavbarAndFooter.next(true)
  }
  ngOnDestroy(): void {
    this.glopalService.hideNavbarAndFooter.next(false)
    
  }
}
