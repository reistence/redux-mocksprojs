import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Redux 1st projects",
    content: "Been implementing a simple counter as warm up",
  },
  {
    id: 2,
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 3,
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 4,
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 5,
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 6,
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
