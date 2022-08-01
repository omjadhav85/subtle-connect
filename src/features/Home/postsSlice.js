import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostService,
  getAllPostsService,
} from "../../utils/serverCalls/postCalls";
import toast from "react-hot-toast";

const initialState = {
  allPosts: [],
  postsStatus: "",
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (thunkAPI) => {
    try {
      const res = await getAllPostsService();
      return res.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ post, token }, thunkAPI) => {
    try {
      const res = await addPostService(post, token);
      return res.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
    },
    [getAllPosts.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to fetch all posts! Please refresh.");
    },
    [addPost.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [addPost.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
      toast.success("Post added!");
    },
    [addPost.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to add new post! Please try again.");
    },
  },
});

export default postsSlice.reducer;
