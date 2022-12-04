import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Kuwait];
  @Input() inputname:any
  constructor() { }

  ngOnInit(): void {
  }
  get lang() {return localStorage.getItem('lang')||'en'}
  

}
