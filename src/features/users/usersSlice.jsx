import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "John Bho" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "John Yo" },
  { id: 4, name: "John Moe" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
