import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLocalS } from "../../utils/getCartFromLocalS";

export type CartItem = {
  img: string;
  name: string;
  text: string;
  price: number;
  rating: number;
  size: number[];
  count: number;
  type: string;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = getCartFromLocalS();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItem>) {
      const findProduct = state.items.find(
        (obj) =>
          obj.img === action.payload.img && obj.type === action.payload.type
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
    minusProduct(state, action: PayloadAction<CartItem>) {
      const findProduct = state.items.find(
        (obj) =>
          obj.img === action.payload.img && obj.type === action.payload.type
      );
      if (findProduct) {
        findProduct.count--;
        state.totalPrice = state.totalPrice - findProduct.price;
      }
      console.log(findProduct);
    },
    removeProduct(state, action: PayloadAction<CartItem>) {
      const findProduct = state.items.find(
        (obj) =>
          obj.img === action.payload.img && obj.type === action.payload.type
      );
      state.items = state.items.filter((obj) => obj !== findProduct);
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.count;
    },
    clearProduct(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, minusProduct, clearProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
