import { TestBed, inject } from '@angular/core/testing';

import { LeadformService } from './leadform.service';

describe('LeadformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadformService]
    });
  });

  it('should be created', inject([LeadformService], (service: LeadformService) => {
    expect(service).toBeTruthy();
  }));
});
