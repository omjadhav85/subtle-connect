import axios from "axios";

export const getAllPostsService = () => {
  return axios.get("/api/posts");
};

export const addPostService = (post, token) => {
  return axios({
    method: "post",
    url: "/api/posts",
    data: {
      postData: post,
    },
    headers: {
      authorization: token,
    },
  });
};

export const deletePostService = (post, token) => {
  return axios({
    method: "delete",
    url: `/api/posts/${post._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const editPostService = (post, token) => {
  return axios({
    method: "post",
    url: `/api/posts/edit/${post._id}`,
    data: {
      postData: post,
    },
    headers: {
      authorization: token,
    },
  });
};
