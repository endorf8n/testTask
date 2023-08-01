import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getUsersThunk, updateUserThunk } from "./usersThunk";

const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.users.push(payload);
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getUsersThunk.pending, updateUserThunk.pending),
        pending
      )
      .addMatcher(
        isAnyOf(getUsersThunk.rejected, updateUserThunk.rejected),
        rejected
      );
  },
});

export const usersReducer = usersSlice.reducer;
