import { TestBed } from '@angular/core/testing';

import { StandardOrdersServiceImpl } from './standard-orders.service';

describe('StandardOrdersService', () => {
  let service: StandardOrdersServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardOrdersServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
