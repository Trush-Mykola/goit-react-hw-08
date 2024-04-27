import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_VALUES,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
