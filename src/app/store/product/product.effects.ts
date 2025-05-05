import { Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root',  // This ensures the effect is provided at the root level and injected globally
  })
export class ProductEffects {
    constructor(private actions$:Actions,private productService:ProductService){
        console.log('actions$', this.actions$);

    }

    loadProducts$ = createEffect(() =>
       this.actions$.pipe(
          ofType(loadProducts), // Listen for the 'loadProducts' action
          switchMap(() =>
            this.productService.getAll().pipe( // Call the service to get products
              map(products => loadProductsSuccess({ products })), // On success, dispatch loadProductsSuccess
              catchError(error => of(loadProductsFailure({ error }))) // On error, dispatch loadProductsFailure
            )
          )
        )
      );
      

}