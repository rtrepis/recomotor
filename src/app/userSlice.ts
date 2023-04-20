import { createSlice } from "@reduxjs/toolkit";

const initialUserSlice = {};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserSlice,
  reducers: {},
});

export const userSliceReducer = userSlice.reducer;

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;
