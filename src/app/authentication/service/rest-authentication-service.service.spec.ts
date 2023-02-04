import { TestBed } from '@angular/core/testing';

import { RestAuthenticationServiceService } from './rest-authentication-service.service';

describe('RestAuthenticationServiceService', () => {
  let service: RestAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
