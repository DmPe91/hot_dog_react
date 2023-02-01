import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: { categorySlice },
});
