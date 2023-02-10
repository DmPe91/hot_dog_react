import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = {
  name: string;
  sortSearch: "rating" | "name" | "price";
};
export interface FilterSliceState {
  category: number;
  sort: Filter;
}

const initialState: FilterSliceState = {
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
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },

    setSearch(state, action: PayloadAction<Filter>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.category = Number(action.payload.category);
    },
  },
});

export const { setCategory, setSearch, setFilters } = categorySlice.actions;

export default categorySlice.reducer;
