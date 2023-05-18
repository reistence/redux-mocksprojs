import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: 1,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Redux 1st projects",
    content: "Been implementing a simple counter as warm up",
  },
  {
    id: 2,
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 3,
    date: sub(new Date(), { minutes: 17 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blg as second pro)ject",
  },
  {
    id: 4,
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 5,
    date: sub(new Date(), { minutes: 21 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
  {
    id: 6,
    date: sub(new Date(), { minutes: 23 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
