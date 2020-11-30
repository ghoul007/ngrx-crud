import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
// import { ProductEffects } from './store/product.effects';
import * as fromProduct from './store/product.reducer';
import { ProductEffects } from './store/product.effects';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductEditComponent, ProductAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    // EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers:[ProductService]
})
export class ProductModule { }
