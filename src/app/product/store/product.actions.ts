import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Product } from '../models/product';


// load product
export const loadProduct = createAction(
  '[Product/Component] loadProduct ',
  props<{id: string}>()
);

export const loadProductSuccess = createAction(
  '[Product/Effect] load Product Success ',
  props<{ selectedProduct: Product }>()
);

export const loadProductFailure = createAction(
  '[Product/Effect] load Product Failure ',
  props<{ error: any }>()
);


// load products list
export const loadProducts = createAction(
  '[Product/Component] loadProducts ',
);

export const loadProductsSuccess = createAction(
  '[Product/Effect] load Products Success ',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product/Effect] load Products Failure ',
  props<{ error: any }>()
);


// export const loadProducts = createAction(
//   '[Product/API] Load Products', 
//   props<{ products: Product[] }>()
// );

// Add Product
export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: Product }>()
);

export const addProductsSuccess = createAction(
  '[Product/Effect] add Product Success ',
  props<{ product: Product }>()
);

export const addProductsFailure = createAction(
  '[Product/Effect] add Product Failure ',
  props<{ error: any }>()
);

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

export const addProducts = createAction(
  '[Product/API] Add Products',
  props<{ products: Product[] }>()
);

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

// delete product
export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product/API] Delete Products Success',
  props<{ id: string }>()
);

export const deleteProductFailure = createAction(
  '[Product/Effect] Delete Product Failure ',
  props<{ error: any }>()
);


export const clearProducts = createAction(
  '[Product/API] Clear Products'
);
