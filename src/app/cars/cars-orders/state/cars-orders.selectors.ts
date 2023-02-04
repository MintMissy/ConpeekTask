import { createFeatureSelector } from '@ngrx/store';
import * as fromCarsOrders from './cars-orders.reducer';

export const selectCarsOrdersState = createFeatureSelector<fromCarsOrders.CarsOrdersState>(
  fromCarsOrders.carsOrdersFeatureKey
);
