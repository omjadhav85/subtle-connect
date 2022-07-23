import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../../utils/serverCalls/authCalls";
import toast from "react-hot-toast";

const initialState = {
  token: localStorage.getItem("token"),
  userData: localStorage.getItem("userData"),
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.token = null;
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
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
  },
});

export default authSlice.reducer;
