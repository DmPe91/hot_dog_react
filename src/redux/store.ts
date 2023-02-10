import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import foodSlice from "./slices/foodSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { categorySlice, cartSlice, foodSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
