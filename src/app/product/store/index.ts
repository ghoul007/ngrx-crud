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
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const productFeatureKey = 'product';

export interface ProductState extends EntityState<Product> {
  // products: Product[];
  error: any;

}
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  error: undefined
})


export const productReducer = createReducer(
  initialState, on(loadProductsSuccess, (state, action) => {
    return adapter.setAll(action.products, state);
    // return { products: action.products }
  }), 
  on(loadProductsFailure, (state, action) => {
    return {
      error: action.error
    }
  })
)



// export const reducers: ActionReducerMap<ProductState> = {

// };

export const selectProductProperty = createFeatureSelector(
  productFeatureKey,
);
export const selectProducts= createSelector(
  selectProductProperty,
   adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectProductProperty,
  (state: ProductState) => state.error
);


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
