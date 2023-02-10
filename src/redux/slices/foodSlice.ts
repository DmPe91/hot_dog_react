import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type FetchFoodArgs = {
  category: number;
  selected: string;
};

export const fetchFood = createAsyncThunk<Food[], FetchFoodArgs>(
  "food/fetchFoodStatus",
  async (params) => {
    const { category, selected } = params;
    const { data } = await axios.get<Food[]>(
      `https://63d2a7e61780fd6ab9ca3aed.mockapi.io/items?${
        category > 0 ? `category=${category}` : ""
      }&sortBy=${selected}&order=desc`
    );

    return data;
  }
);
export type Food = {
  img: string;
  name: string;
  price: number;
  rating: number;
  size: number[];
  text: string;
  count: number;
  type: string;
};

interface FoodSliceState {
  items: Food[];
  status: "LOADING" | "ERROR" | "SUCCESS";
}

const initialState: FoodSliceState = {
  items: [],
  status: "LOADING",
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFood.pending, (state, action) => {
      state.status = "LOADING";
      state.items = [];
    });

    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "SUCCESS";
    });

    builder.addCase(fetchFood.rejected, (state, action) => {
      state.status = "ERROR";
      state.items = [];
    });
  },
});

export const { setItems } = foodSlice.actions;

export default foodSlice.reducer;
