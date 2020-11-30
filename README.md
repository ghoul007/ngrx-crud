 ng add @ngrx/schematics
 ng add @ngrx/store

ng g m product --route "product" -m app.module.ts
ng g store --statePath=product/store -m product/product.module.ts --stateInterface=productState
ng g action product/store/product

ng add @ngrx/store-devtools

