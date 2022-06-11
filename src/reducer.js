import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  groupStatus: false,
  user: false,
};

export const customReducer = createReducer(initialState, {
  updateGroupStatus: (state, action) => {
    state.groupStatus = true;
  },
});
