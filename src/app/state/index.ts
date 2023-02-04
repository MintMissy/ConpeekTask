import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromCarsOrders from '../cars/cars-orders/state/cars-orders.reducer';
import * as fromUsers from '../users/state/users.reducer';

export const appFeatureKey = 'app';

export interface AppState {  [fromCarsOrders.carsOrdersFeatureKey]: fromCarsOrders.State;

[fromUsers.usersFeatureKey]: fromUsers.UsersState;}

export const reducers: ActionReducerMap<AppState> = {  [fromCarsOrders.carsOrdersFeatureKey]: fromCarsOrders.reducer,
[fromUsers.usersFeatureKey]: fromUsers.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
