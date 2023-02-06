import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFood = createAsyncThunk(
  "food/fetchFoodStatus",
  async (params, thunkAPI) => {
    const { category, selected, axios } = params;
    const { data } = await axios.get(
      `https://63d2a7e61780fd6ab9ca3aed.mockapi.io/items?${
        category > 0 ? `category=${category}` : ""
      }&sortBy=${selected}&order=desc`
    );

    return data;
  }
);

const initialState = {
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
