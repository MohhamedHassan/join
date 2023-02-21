import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxStarsComponent } from 'ngx-stars';
import { ToastrService } from 'ngx-toastr';
import { HistoryService } from '../../services/history.service';
@Component({
  selector: 'app-submit-rate',
  templateUrl: './submit-rate.component.html',
  styleUrls: ['./submit-rate.component.scss']
})
export class SubmitRateComponent implements OnInit {
  @ViewChild(NgxStarsComponent)
  starsComponent: NgxStarsComponent;
  rate:any = 0
  @Input() rateData:any
  @Output() closePopup=new EventEmitter
  rateForm:FormGroup
  loading
  submited=false
  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private historyService:HistoryService) { }

  ngOnInit(): void {
    this.rateForm = this.fb.group({
      activity_id:[''],
      review_title:['',Validators.required],
      review_desc:['',Validators.required],
      review_rating:[0]
    })
    this.rateForm.patchValue({
      activity_id:this.rateData?.activity_id
    })
  }
  onRatingSet(rating: number): void {
     
 
    if(this.rate==0.5&&rating==0.5) {
      this.rateForm.patchValue({
        review_rating:0
      })
      this.starsComponent.setRating(0);
    } else {
      this.rateForm.patchValue({
        review_rating:rating
      })
    }
    
    console.log(this.rate)
  }
  submitRate() {
    this.submited=true
    if(this.rateForm.valid) {
      this.loading=true
      this.historyService.rate(this.rateForm.value).subscribe(
        res =>  {
          if(res?.code) {
            this.closePopup.emit('')
            this.toastr.success(res?.message)
          }
          this.loading=false
        }
      )
    }
  }
}
