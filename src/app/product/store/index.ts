import { loadProductsSuccess, loadProductsFailure } from './product.actions';
import { Product } from './../models/product';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Action } from 'rxjs/internal/scheduler/Action';

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[];
  error: any;

}
export const initialState: ProductState = {
  products: undefined,
  error: undefined
}


export const productReducer = createReducer(
  initialState, on(loadProductsSuccess, (state, action) => {
    return {
      products: action.products
    }
  }), on(loadProductsFailure, (state, action) => {
    return {
      products: state.products,
      error: action.error
    }
  })
)



// export const reducers: ActionReducerMap<ProductState> = {

// };


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
