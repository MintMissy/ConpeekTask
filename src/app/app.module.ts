import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtTokenInterceptor } from './core/interceptor/jwt-token.interceptor';
import { SharedModule } from './shared/shared.module';
import * as fromApp from './state';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducers, { metaReducers: fromApp.metaReducers }),
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true }],
	bootstrap: [AppComponent],
})
export class AppModule {}
