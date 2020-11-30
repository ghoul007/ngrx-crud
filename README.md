 ng add @ngrx/schematics
 ng add @ngrx/store

ng g m product --route "product" -m app.module.ts
ng g store --statePath=product/store -m product/product.module.ts --stateInterface=productState
ng g action product/store/product

ng add @ngrx/store-devtools



npm i @angular-devkit/schematics
npm install @ngrx/effects --save

ng g @ngrx/schematics:effect product/store/product  -m product/product.module.ts  --api true --creators --skip-tests

ng add @ngrx/entity