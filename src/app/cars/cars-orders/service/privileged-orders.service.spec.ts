import { TestBed } from '@angular/core/testing';
import { PrivilegedOrdersService } from './orders-service.interface';
import { PrivilegedOrdersServiceImpl } from './privileged-orders.service';

describe('PrivilegedOrdersService', () => {
  let service: PrivilegedOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegedOrdersServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
