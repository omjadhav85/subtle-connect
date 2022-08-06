import axios from "axios";

export const getAllUsersService = () => {
  return axios.get("/api/users");
};
