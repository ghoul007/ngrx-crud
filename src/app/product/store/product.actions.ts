import { Product } from './../models/product';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Product List] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product List] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List] Load Products Failure',
  props<{ error: any }>()
);