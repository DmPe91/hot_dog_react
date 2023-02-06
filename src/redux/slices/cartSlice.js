import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.items.find(
        (obj) => obj.img === action.payload.img
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusProduct(state, action) {
      const findProduct = state.items.find(
        (obj) => obj.img === action.payload.img
      );
      if (findProduct) {
        findProduct.count--;
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter((obj) => obj.img !== action.payload.img);
    },
    clearProduct(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, minusProduct, clearProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
