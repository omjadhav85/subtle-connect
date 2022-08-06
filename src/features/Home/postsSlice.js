import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostService,
  getAllPostsService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
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

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ post, token }, thunkAPI) => {
    try {
      const res = await deletePostService(post, token);
      return res.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ post, token }, thunkAPI) => {
    try {
      const res = await editPostService(post, token);
      return res.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ post, token }, thunkAPI) => {
    try {
      const res = await likePostService(post, token);
      return res.data.posts;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ post, token }, thunkAPI) => {
    try {
      const res = await dislikePostService(post, token);
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
    [deletePost.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
      toast.success("Post deleted successfully!");
    },
    [deletePost.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to delete the post! Please try again.");
    },
    [editPost.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
      toast.success("Post edited successfully!");
    },
    [editPost.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to edit the post! Please try again.");
    },
    [likePost.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
      toast.success("Post liked successfully!");
    },
    [likePost.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to like the post! Please try again.");
    },
    [dislikePost.pending]: (state) => {
      state.postsStatus = "pending";
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.postsStatus = "fulfilled";
      state.allPosts = payload;
      toast.success("Post disliked successfully!");
    },
    [dislikePost.rejected]: (state) => {
      state.postsStatus = "rejected";
      toast.error("Failed to dislike the post! Please try again.");
    },
  },
});

export default postsSlice.reducer;
