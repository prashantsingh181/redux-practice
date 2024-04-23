import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Prashant Singh" },
  { id: 2, name: "Dave Gray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

export const usersSelector = (state) => state.users;
