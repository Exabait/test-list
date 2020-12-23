import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ProductsModule } from './store/products/products.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductComponent } from './components/product/product.component';
import { CreatedDatePipe } from './pipes/created-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreatedDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
