import { ProductState } from './../../store/product.reducer';
import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import *  as fromActions from "../../store/product.actions";
import { Observable } from 'rxjs';
import { selectAll } from '../../store/product.reducer';
import { selectProducts } from '../../store/product.selectors';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: any;
  // products: Product[] = [];

  constructor(private productService: ProductService,
    public router: Router,
    private store: Store<ProductState>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    // const productsObserver = {
    //   next: products => {
    //     this.store.dispatch(fromActions.loadProductsSuccess({ products }));
    //     // this.products = products
    //   },
    //   error: error => {
    //     this.store.dispatch(fromActions.loadProductsFailure({ error }));
    //     console.error(error)
    //   }
    // };

    // this.productService.getProducts().subscribe(productsObserver);
    this.products$ = this.store.pipe(select(selectProducts))
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver);
  }
}