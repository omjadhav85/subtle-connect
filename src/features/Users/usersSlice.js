import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllUsersService } from "../../utils/serverCalls/userCalls";

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
  },
});

export default usersSlice.reducer;
