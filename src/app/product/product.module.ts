import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers, { metaReducers: fromProduct.metaReducers })
  ]
})
export class ProductModule { }
