import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { Product } from '../../models/Product';


const exampleProduct: Product = {
  productId: '1',
  imagePath: 'https://avatars.mds.yandex.net/get-marketpic/1579151/market_o_R_lMdU-_276BmR5AN1kg/200x200',
  rating: 4.9,
  percentage: 99,
  tags: '1.2K',
  title: 'Xiaomi Wifi Extender',
  price: 12.00,
  ePacket: true,
  createdAt: new Date()
};


export interface State {
  products: Product[];
  product: Product;
}

export const initialState: State = {
  products: [
    exampleProduct,
  ],
  product: exampleProduct
};

export const reducer = createReducer(
  initialState,
  on(
    ProductsActions.setProductsSuccess,
    (state, {productsList}) => ({
      ...state,
      products: productsList
    })
  ),
  on(
    ProductsActions.setProduct,
    (state, {id}) => {
      const productById: Product = state.products.find((product: Product) => product.productId === id);
      return {
        ...state,
        product: productById
      };
    }
  ),
);


export const getProducts = (state: State): Product[] => {
  return state.products;
};
export const getProduct = (state: State): Product => {
  return state.product;
};
