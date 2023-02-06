import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import foodSlice from "./slices/foodSlice";

export const store = configureStore({
  reducer: { categorySlice, cartSlice, foodSlice },
});
