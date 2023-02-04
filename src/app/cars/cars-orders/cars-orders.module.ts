import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCarsOrders from './state/cars-orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsOrdersEffects } from './state/cars-orders.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCarsOrders.carsOrdersFeatureKey, fromCarsOrders.reducer),
    EffectsModule.forFeature([CarsOrdersEffects])
  ]
})
export class CarsOrdersModule { }
