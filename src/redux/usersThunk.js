import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, updateUser } from "../services/usersApi";

export const getUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUsers();
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const response = await updateUser({ id, user });
      return response;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
