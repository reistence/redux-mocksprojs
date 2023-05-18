import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: 1,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Redux 1st projects",
    content: "Been implementing a simple counter as warm up",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
  },
  {
    id: 2,
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
  },
  {
    id: 3,
    date: sub(new Date(), { minutes: 17 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blg as second pro)ject",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
  },
  {
    id: 4,
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
  },
  {
    id: 5,
    date: sub(new Date(), { minutes: 21 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
  },
  {
    id: 6,
    date: sub(new Date(), { minutes: 23 }).toISOString(),
    title: "Redux 2nd projects",
    content: "Been implementing a simple blog as second project",
    reactions: {
      thumbUp: 0,
      wow: 0,
      laugh: 0,
      puke: 0,
      hearts: 0,
    },
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
            reactions: {
              thumbUp: 0,
              wow: 0,
              laugh: 0,
              puke: 0,
              hearts: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
