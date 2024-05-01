import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => (instance.defaults.headers.common.Authorization = "");

export const register = createAsyncThunk("auth/register", async (userData, thunkApi) => {
  try {
    const { data } = await instance.post("/users/signup", userData);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (userData, thunkApi) => {
  try {
    const { data } = await instance.post("/users/login", userData);
    setToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) return thunkApi.rejectWithValue(null);

    setToken(token);
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await instance.post("/users/logout");
    clearToken();
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
