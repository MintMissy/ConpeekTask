import { TestBed } from '@angular/core/testing';
import { PrivilegedCarsServiceImpl } from './privilaged-cars.service';


describe('PrivilegedCarsService', () => {
  let service: PrivilegedCarsServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegedCarsServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
