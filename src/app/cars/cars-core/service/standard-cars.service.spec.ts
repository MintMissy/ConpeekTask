import { TestBed } from '@angular/core/testing';

import { StandardCarsService } from './standard-cars.service';

describe('StandardCarsService', () => {
  let service: StandardCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
