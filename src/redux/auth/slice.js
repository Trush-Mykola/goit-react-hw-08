import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_VALUES = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_VALUES,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_VALUES;
      });
  },
});

export const authReducer = authSlice.reducer;
