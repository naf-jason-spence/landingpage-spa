import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map } from 'rxjs/operators';

import { ContactLead } from './models/contact-lead.interface';

const postApiUrl = 'http://qa.nafapi.com';

@Injectable()
export class LeadformService {

  contact: ContactLead;
  private contactLeadApiUrl: string = `${postApiUrl}/v1/lead/PostCareerLead`;

  constructor(private http: HttpClient) { }

  //
  // Add contact
  addContact(contact: ContactLead): Observable<ContactLead> {
    const params = new HttpParams({
      fromString: `firstname=${contact.FirstName}&lastname=${contact.LastName}&email=${contact.Email}&phone=${contact.Phone}&zip=${contact.Zip}&referredby=${contact.ReferredBy}`,
    });

    return this.http
      .post<ContactLead>(this.contactLeadApiUrl, contact, { params, observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  //
  // Handle errors
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
