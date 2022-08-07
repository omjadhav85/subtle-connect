import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  followUserService,
  getAllUsersService,
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
  },
});

export default usersSlice.reducer;
