import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EncryptService } from '../authentication/service/encrypt/encrypt-service.interface';
import { Sha256EncryptService } from '../authentication/service/encrypt/sha256-encrypt.service';
import { UsersEffects } from './state/users.effects';
import * as fromUsers from './state/users.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
		EffectsModule.forFeature([UsersEffects]),
	],
})
export class UsersModule {}
