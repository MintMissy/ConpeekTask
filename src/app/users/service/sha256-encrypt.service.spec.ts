import { TestBed } from '@angular/core/testing';

import { Sha256EncryptService } from './sha256-encrypt.service';

describe('Sha256EncryptService', () => {
  let service: Sha256EncryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sha256EncryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
