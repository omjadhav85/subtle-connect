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
