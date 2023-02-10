import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication/service/authentication/authentication-service.interface';
import { AuthenticationServiceImpl } from './authentication/service/authentication/authentication.service';
import { CoreModule } from './core/core.module';
import { JwtTokenInterceptor } from './core/interceptor/jwt-token.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducers, { metaReducers: fromApp.metaReducers }),
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
		{ provide: AuthenticationService, useClass: AuthenticationServiceImpl },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
