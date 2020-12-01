import { Router } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as  ProductActions from './product.actions'


@Injectable()
export class ProductEffects {


  loadProduct$ = createEffect(() => {
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


  constructor(private actions$: Actions,
    private productService: ProductService,
    private router: Router) { }

}
