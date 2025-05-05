import { createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

export const selectProducts = createSelector(
    (state: { product: ProductState }) => state.product,  // Directly access product slice
    (productState: ProductState) => productState.products  // Get the 'products' from the product state
  );