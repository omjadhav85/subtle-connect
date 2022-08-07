import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  bookmarkService,
  followUserService,
  getAllUsersService,
  removeBookmarkService,
} from "../../utils/serverCalls/userCalls";

import { getUserMapping } from "../../utils/helpers";

const initialState = {
  allUsers: {},
  usersStatus: "",
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (thunkAPI) => {
    try {
      const res = await getAllUsersService();
      return res.data.users;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ userToFollow, dispatch, token }, thunkAPI) => {
    try {
      const res = await followUserService(userToFollow, token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async ({ user, post, token }, thunkAPI) => {
    try {
      const res = await bookmarkService(post, token);
      return { user, updatedBookmarks: res.data.bookmarks };
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "users/removeBookmarkPost",
  async ({ user, post, token }, thunkAPI) => {
    try {
      const res = await removeBookmarkService(post, token);
      return { user, updatedBookmarks: res.data.bookmarks };
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.usersStatus = "pending";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.usersStatus = "fulfilled";
      state.allUsers = getUserMapping(payload);
    },
    [getAllUsers.rejected]: (state) => {
      state.usersStatus = "rejected";
      toast.error("Failed to fetch all users! Please refresh.");
    },
    [followUser.pending]: (state) => {
      state.usersStatus = "pending";
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.usersStatus = "fulfilled";
      const { user, followUser } = payload;
      state.allUsers[user.username] = user;
      state.allUsers[followUser.username] = followUser;
      toast.success(`You are now following @${followUser.username}`);
    },
    [followUser.rejected]: (state) => {
      state.usersStatus = "rejected";
      toast.error("Failed to follow user! Please try again.");
    },
    [bookmarkPost.pending]: (state) => {
      state.usersStatus = "pending";
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      const { user, updatedBookmarks } = payload;
      state.usersStatus = "fulfilled";
      state.allUsers[user.username].bookmarks = updatedBookmarks;
      toast.success(`Post added to your bookmarks!`);
    },
    [bookmarkPost.rejected]: (state) => {
      state.usersStatus = "rejected";
      toast.error("Failed to bookmark post! Please try again.");
    },
    [removeBookmarkPost.pending]: (state) => {
      state.usersStatus = "pending";
    },
    [removeBookmarkPost.fulfilled]: (state, { payload }) => {
      const { user, updatedBookmarks } = payload;
      state.usersStatus = "fulfilled";
      state.allUsers[user.username].bookmarks = updatedBookmarks;
      toast.success(`Post removed from bookmarks!`);
    },
    [removeBookmarkPost.rejected]: (state) => {
      state.usersStatus = "rejected";
      toast.error("Failed to remove bookmark! Please try again.");
    },
  },
});

export default usersSlice.reducer;
