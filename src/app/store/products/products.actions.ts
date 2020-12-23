import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/Product';

export const SET_PRODUCTS = '[Products] Get products';
export const SET_PRODUCTS_SUCCESS = '[Products] Get products success';
export const SET_PRODUCT = '[Products] Set product';

export const setProducts = createAction(SET_PRODUCTS);
export const setProductsSuccess = createAction(SET_PRODUCTS_SUCCESS, (productsList: Product[]) => ({productsList}));
export const setProduct = createAction(SET_PRODUCT, props<{ id: string }>());
