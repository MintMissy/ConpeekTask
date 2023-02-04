import * as fromCarsOrders from './cars-orders.reducer';
import { selectCarsOrdersState } from './cars-orders.selectors';

describe('CarsOrders Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCarsOrdersState({
      [fromCarsOrders.carsOrdersFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
