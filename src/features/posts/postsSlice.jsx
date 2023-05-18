import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// const initialState = [
//   {
//     id: 1,
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     title: "Redux 1st projects",
//     content: "Been implementing a simple counter as warm up",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
//   {
//     id: 2,
//     date: sub(new Date(), { minutes: 15 }).toISOString(),
//     title: "Redux 2nd projects",
//     content: "Been implementing a simple blog as second project",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
//   {
//     id: 3,
//     date: sub(new Date(), { minutes: 17 }).toISOString(),
//     title: "Redux 2nd projects",
//     content: "Been implementing a simple blg as second pro)ject",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
//   {
//     id: 4,
//     date: sub(new Date(), { minutes: 20 }).toISOString(),
//     title: "Redux 2nd projects",
//     content: "Been implementing a simple blog as second project",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
//   {
//     id: 5,
//     date: sub(new Date(), { minutes: 21 }).toISOString(),
//     title: "Redux 2nd projects",
//     content: "Been implementing a simple blog as second project",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
//   {
//     id: 6,
//     date: sub(new Date(), { minutes: 23 }).toISOString(),
//     title: "Redux 2nd projects",
//     content: "Been implementing a simple blog as second project",
//     reactions: {
//       thumbUp: 0,
//       wow: 0,
//       laugh: 0,
//       puke: 0,
//       hearts: 0,
//     },
//   },
// ];

const initialState = {
  posts: [],
  status: "idle", //
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
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
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // date + reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbUp: 0,
            wow: 0,
            laugh: 0,
            puke: 0,
            hearts: 0,
          };
          return post;
        });
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
