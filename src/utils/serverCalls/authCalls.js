import axios from "axios";

export const loginUser = async (username, password) => {
  const res = await axios.post("/api/auth/login", {
    username,
    password,
  });

  return res;
};

export const signupUser = async (username, password, otherDetails) => {
  const res = await axios.post("/api/auth/signup", {
    username,
    password,
    ...otherDetails,
  });

  return res;
};
