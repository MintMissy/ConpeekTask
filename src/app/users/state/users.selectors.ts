import { createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(
  fromUsers.usersFeatureKey
);
