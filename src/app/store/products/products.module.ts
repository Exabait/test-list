import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductsEffects } from './products.effects';
import { reducer } from './products.reducer';
import { metaReducers } from './index';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('products', reducer, {metaReducers}),
    EffectsModule.forFeature([ProductsEffects])],
  exports: [],
})
export class ProductsModule {}
