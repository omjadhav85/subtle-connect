import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Authentication/authSlice";
import postsReducer from "../features/Home/postsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
