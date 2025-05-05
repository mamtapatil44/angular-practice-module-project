import { createReducer, on } from "@ngrx/store"
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.actions"

export interface ProductState{
    products:any[],
    errors:any
}
export const inititalState :ProductState ={
    products:[],
    errors:null

}

export const productReducer = createReducer(inititalState,
    on(loadProducts ,(state)=>({...state})),
    on(loadProductsSuccess ,(state,{products})=>({...state,products})),
    on(loadProductsFailure ,(state,{error})=>({...state,error}))
)