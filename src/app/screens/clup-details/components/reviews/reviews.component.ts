import { Component, OnInit, Input } from '@angular/core';
import { review } from '../../services/clup-details.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews!:review[]
  constructor() { }

  ngOnInit(): void {
  }

}
