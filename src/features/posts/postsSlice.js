import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  error: null,
  state: "idle",
  posts: [],
};

const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author: Number(author),
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction: {
      reducer(state, action) {
        const { postId, reaction } = action.payload;
        const existingPost = state.posts.find((post) => post.id === postId);
        if (existingPost) {
          existingPost.reactions[reaction]++;
        }
      },
      prepare(postId, reaction) {
        return {
          payload: {
            postId,
            reaction,
          },
        };
      },
    },
  },
});

export default postsSlice.reducer;
export const { addPost, addReaction } = postsSlice.actions;
export const postsSelector = (state) => state.posts.posts;
