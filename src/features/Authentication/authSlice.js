import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../utils/serverCalls/authCalls";

const initialState = {
  token: localStorage.getItem("token"),
  userData: localStorage.getItem("userData"),
  authStatus: null,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }, thunkAPI) => {
    // console.log("username: ", username);
    // console.log("password: ", password);
    try {
      const res = await loginUser(username, password);

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
    },
    [userLogin.rejected]: (state, action) => {
      state.authStatus = "rejected";
    },
  },
});

export default authSlice.reducer;
