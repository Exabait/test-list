import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/internal/operators';

import * as actions from './products.actions';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {}

  onGetProducts$ = createEffect(() => this.actions$.pipe(
    ofType(actions.SET_PRODUCTS),
    mergeMap(() => this.productsService.getProducts()),
    map((products: Product[]) => actions.setProductsSuccess(products))
  ));

}
