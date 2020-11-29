import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const productFeatureKey = 'product';

export interface ProductState {

}

export const reducers: ActionReducerMap<ProductState> = {

};


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
