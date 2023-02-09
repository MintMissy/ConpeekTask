import { TestBed } from '@angular/core/testing';
import { PrivilegedCarsService } from 'src/app/cars/service/cars-service.interface';

import { PrivilegedUserServiceImpl } from './privileged-user.service';

describe('PrivilegedUserService', () => {
  let service: PrivilegedCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegedUserServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
