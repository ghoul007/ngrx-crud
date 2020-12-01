import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ProductActions from './product.actions';
import { Product } from '../models/product';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  // additional entities state properties
  selectedProduct: Product;
  error: any;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  // additional entity state properties
  selectedProduct: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess,
    (state, action) => adapter.setAll(action.products, state)
  ),


  on(ProductActions.addProduct,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductsSuccess,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductsFailure,
    (state, action) => {
      return { ...state, error: action.error }
    }
  ),


  on(ProductActions.loadProductSuccess,
    (state, action) => ({ ...state, selectedProduct: action.selectedProduct })
  ),
  on(ProductActions.loadProductFailure,
    (state, action) => {
      return { ...state, error: action.error }
    }
  ),
  on(ProductActions.upsertProduct,
    (state, action) => adapter.upsertOne(action.product, state)
  ),
  on(ProductActions.addProducts,
    (state, action) => adapter.addMany(action.products, state)
  ),
  on(ProductActions.upsertProducts,
    (state, action) => adapter.upsertMany(action.products, state)
  ),
  on(ProductActions.updateProduct,
    (state, action) => adapter.updateOne(action.product, state)
  ),
  on(ProductActions.updateProducts,
    (state, action) => adapter.updateMany(action.products, state)
  ),
  on(ProductActions.deleteProduct,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProductSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProductFailure,
    (state, action) => {
      return {
        ...state, error: action.error
      }
    }
  ),
  // on(ProductActions.loadProducts,
  //   (state, action) => adapter.setAll(action.products, state)
  // ),
  on(ProductActions.clearProducts,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
