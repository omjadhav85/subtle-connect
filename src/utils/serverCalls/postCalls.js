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

export const likePostService = (post, token) => {
  return axios({
    method: "post",
    url: `/api/posts/like/${post._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const dislikePostService = (post, token) => {
  return axios({
    method: "post",
    url: `/api/posts/dislike/${post._id}`,
    headers: {
      authorization: token,
    },
  });
};

export const addCommentService = (post, comment, token) => {
  return axios({
    method: "post",
    url: `/api/comments/add/${post._id}`,
    data: {
      commentData: { text: comment },
    },
    headers: {
      authorization: token,
    },
  });
};

export const deleteCommentService = (post, comment, token) => {
  return axios({
    method: "delete",
    url: `/api/comments/delete/${post._id}/${comment._id}`,
    headers: {
      authorization: token,
    },
  });
};
