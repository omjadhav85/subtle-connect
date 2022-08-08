import axios from "axios";

export const getAllUsersService = () => {
  return axios.get("/api/users");
};

export const followUserService = (userToFollow, token) => {
  return axios({
    method: "post",
    url: `/api/users/follow/${userToFollow._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const unfollowUserService = (userToUnfollow, token) => {
  return axios({
    method: "post",
    url: `/api/users/unfollow/${userToUnfollow._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const bookmarkService = (post, token) => {
  return axios({
    method: "post",
    url: `/api/users/bookmark/${post._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const removeBookmarkService = (post, token) => {
  return axios({
    method: "post",
    url: `/api/users/remove-bookmark/${post._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const getUserDetailService = (userId) => {
  return axios.get(`/api/users/${userId}`);
};
