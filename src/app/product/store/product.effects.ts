import { Router } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import * as  ProductActions from './product.actions'


@Injectable()
export class ProductEffects {


  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap(action =>
        this.productService.getProduct(action.id).pipe(
          map(product => ProductActions.loadProductSuccess({ selectedProduct: product })),
          catchError(error => of(ProductActions.loadProductFailure({ error }))))
      ),
    );
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      ),
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap(action =>
        this.productService.createProduct(action.product).pipe(
          map(product => ProductActions.addProductsSuccess({ product })),
          catchError(error => of(ProductActions.addProductsFailure({ error }))))
      ),
      tap(() => this.router.navigate(["/product/list"]))
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      concatMap(action =>
        this.productService.editProduct(action.product.id, action.product.changes)
      ),
      tap(() => this.router.navigate(["/product/list"]))
    );
  }, { dispatch: false });


  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap(action =>
        this.productService.deleteProduct(action.id).pipe(
          map(product => ProductActions.deleteProductSuccess({ id: action.id })),
          catchError(error => of(ProductActions.deleteProductFailure({ error }))))
      ),
    );
  });


  constructor(private actions$: Actions,
    private productService: ProductService,
    private router: Router) { }

}
