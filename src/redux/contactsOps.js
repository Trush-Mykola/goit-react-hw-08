import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6626384e052332d553221667.mockapi.io",
});

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await instance.get("/contacts");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contactId, thunkApi) => {
  try {
    const { data } = await instance.post("/contacts", contactId);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
  try {
    const { data } = await instance.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
