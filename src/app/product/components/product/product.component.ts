import { selectedProduct } from './../../store/product.selectors';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductState } from '../../store/product.reducer';
import * as fromActions from  '../../store/product.actions';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromActions.loadProduct({ id: this.route.snapshot.paramMap.get("id") })
    );

    this.product$ = this.store.pipe(select(selectedProduct));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }

}
