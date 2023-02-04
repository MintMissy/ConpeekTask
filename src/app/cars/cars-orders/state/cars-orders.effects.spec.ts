import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CarsOrdersEffects } from './cars-orders.effects';

describe('CarsOrdersEffects', () => {
  let actions$: Observable<any>;
  let effects: CarsOrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarsOrdersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CarsOrdersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
