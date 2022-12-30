import { Component, Input, OnInit } from '@angular/core';
import { MembersService } from 'src/app/screens/members/services/members.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {
  @Input() location:any
  bsInlineValue = new Date();
  members:any
  selectedLocation:any
  minDate: Date;
  maxDate: Date;
  constructor(public membersservice:MembersService) { }

  ngOnInit(): void {
    this.membersservice.members.subscribe(res =>  {
      this.members=res
    })
  }
selectLocation(item:any) {
  this.selectedLocation=item
  this.minDate = new Date(item?.from_date)
  this.maxDate = new Date(item?.to_date)
}
}
