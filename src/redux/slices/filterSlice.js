import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  search: {
    name: "популярности",
    sortSearch: "rating",
  },
};

export const categorySlice = createSlice({
  name: "filter_category",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },

    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSearch } = categorySlice.actions;

export default categorySlice.reducer;
