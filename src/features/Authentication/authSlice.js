import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  updateUserService,
} from "../../utils/serverCalls/authCalls";
import toast from "react-hot-toast";
import {
  followUser,
  bookmarkPost,
  removeBookmarkPost,
} from "../Profile/usersSlice";

const initialState = {
  token: localStorage.getItem("token"),
  userData: JSON.parse(localStorage.getItem("userData")),
  authStatus: null,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await loginUser(username, password);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async ({ username, password, firstName, lastName }, thunkAPI) => {
    try {
      const res = await signupUser(username, password, { firstName, lastName });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ userData, token }, thunkAPI) => {
    try {
      const res = await updateUserService(userData, token);
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.token = null;
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      toast.success("Logout successful!");
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.authStatus = "pending";
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.authStatus = "fulfilled";
      state.token = payload.encodedToken;
      state.userData = payload.foundUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("userData", JSON.stringify(payload.foundUser));
      toast.success("Login successful!");
    },
    [userLogin.rejected]: (state) => {
      state.authStatus = "rejected";
      toast.error("Login failed! Please check your credentials.");
    },
    [userSignup.pending]: (state) => {
      state.authStatus = "pending";
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      state.authStatus = "fulfilled";
      state.token = payload.encodedToken;
      state.userData = payload.createdUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("userData", JSON.stringify(payload.createdUser));
      toast.success("Signup successful!");
    },
    [userSignup.rejected]: (state) => {
      state.authStatus = "rejected";
      toast.error("Signup failed! Please check your credentials.");
    },
    [updateUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.authStatus = "fulfilled";
      state.userData = payload;
      localStorage.setItem("userData", JSON.stringify(payload));
      // toast.success("Signup successful!");
    },
    [updateUser.rejected]: (state) => {
      state.authStatus = "rejected";
      toast.error("Update user failed! Please try again.");
    },

    // Note: This is to change userData in authSlice once changes are made in allUsers of usersSlice
    [followUser.fulfilled]: (state, { payload }) => {
      state.authStatus = "fulfilled";
      state.userData = payload.user;
      localStorage.setItem("userData", JSON.stringify(payload.user));
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      const { user, updatedBookmarks } = payload;
      state.authStatus = "fulfilled";
      state.userData.bookmarks = updatedBookmarks;
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...user, bookmarks: updatedBookmarks })
      );
    },
    [removeBookmarkPost.fulfilled]: (state, { payload }) => {
      const { user, updatedBookmarks } = payload;
      state.authStatus = "fulfilled";
      state.userData.bookmarks = updatedBookmarks;
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...user, bookmarks: updatedBookmarks })
      );
    },
  },
});

export default authSlice.reducer;

export const { userLogout } = authSlice.actions;
