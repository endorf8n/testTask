import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.users.users;
export const selectFilter = (state) => state.filter.value;

export const selectFilteredUsers = createSelector(
  [selectUser, selectFilter],
  (users, filter) => {
    if (filter === "follow") {
      return users.filter((user) => !user.isFollowed);
    } else if (filter === "following") {
      return users.filter((user) => user.isFollowed);
    } else {
      return users;
    }
  }
);
