import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductEditComponent, ProductAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducers, { metaReducers: fromProduct.metaReducers })
  ],
  providers:[ProductService]
})
export class ProductModule { }
