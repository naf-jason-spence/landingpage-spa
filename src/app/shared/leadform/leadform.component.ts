import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ContactLead } from './models/contact-lead.interface';

import { LeadformService } from './leadform.service';

@Component({
  selector: 'app-leadform',
  templateUrl: './leadform.component.html',
  styleUrls: ['./leadform.component.scss']
})
export class LeadformComponent implements OnInit {

  thankYouPageUrl: string = '/thank-you';
  contact: ContactLead = {
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Zip: null,
    ReferredBy: ''
  }
  isLoading: boolean = false;
  message: string = 'submitting data now';

  // Masks and Regex
  userNameRegex = '^[a-zA-Z -]{2,30}$';
  referNameRegex = '^[a-zA-Z -]{2,60}$';
  zipcodeRegex = '^[0-9]{5}$';
  phoneRegex = '^[(][^01].*$';
  zipcodeMask = [/\d/, /\d/, /\d/, /\d/, /\d/];
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private router: Router,
    private leadformService: LeadformService) { }

  ngOnInit() {
  }

  // Form submit
  submitData(data: ContactLead, isValid: boolean) {
    if (isValid) {
      this.isLoading = true;

      this.leadformService
        .addContact(data)
        .subscribe(resp => {
          if (resp['status'] === 200) {
            this.isLoading = false;
            this.router.navigateByUrl(this.thankYouPageUrl);
          }
        });
    }
  }

}
