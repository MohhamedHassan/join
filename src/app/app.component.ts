import { Component } from '@angular/core';
import { HomeService } from './screens/home/services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public homeService:HomeService) {

  }
  ngOnInit(): void {
  }
}
