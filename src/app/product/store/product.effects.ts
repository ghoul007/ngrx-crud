import { ProductService } from './../services/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as  ProductActions  from './product.actions'


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


  constructor(private actions$: Actions, private productService: ProductService) {}

}
