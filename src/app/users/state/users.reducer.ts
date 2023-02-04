import { createReducer } from '@ngrx/store';

export const usersFeatureKey = 'users';

export interface UsersState {}

export const initialState: UsersState = {};

export const reducer = createReducer(
	initialState
	// on(UsersActions.loadUserss, (state) => state)
);
