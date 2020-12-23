import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromProducts from './products.reducer';

export const metaReducers: MetaReducer<any, any>[] = [];

export interface State {
  products: fromProducts.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer
};

export const getProductsState = (state: State) => state.products;

export const getProducts = createSelector(
  getProductsState,
  fromProducts.getProducts
);

export const getProduct = createSelector(
  getProductsState,
  fromProducts.getProduct);
