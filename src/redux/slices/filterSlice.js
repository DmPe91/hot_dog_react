import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: {
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
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.category = Number(action.payload.category);
    },
  },
});

export const { setCategory, setSearch, setFilters } = categorySlice.actions;

export default categorySlice.reducer;
