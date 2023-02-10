import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItem>) {
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
    minusProduct(state, action: PayloadAction<CartItem>) {
      const findProduct = state.items.find(
        (obj) => obj.img === action.payload.img
      );
      if (findProduct) {
        findProduct.count--;
      }
    },
    removeProduct(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter((obj) => obj.img !== action.payload.img);
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
