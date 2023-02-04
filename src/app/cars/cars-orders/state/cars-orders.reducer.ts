import { createReducer } from '@ngrx/store';

export const carsOrdersFeatureKey = 'carsOrders';

export interface CarsOrdersState {}

export const initialState: CarsOrdersState = {};

export const reducer = createReducer(
	initialState
	// on(CarsOrdersActions.loadCarsOrderss, state => state),
);
