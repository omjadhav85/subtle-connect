import {
  addPost,
  getAllPosts,
  initialState,
} from "../features/Home/postsSlice";
import axios from "axios";
// import { store } from "../app/store";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Authentication/authSlice";
import postsReducer from "../features/Home/postsSlice";
import usersReducer from "../features/Profile/usersSlice";

jest.mock("axios");

describe("this test is for all api calls on post actions", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTAwY2NjZC1kNmI1LTQyZTQtOGYyNy0wYzIzYjA0YTU5ZmMiLCJ1c2VybmFtZSI6Im9ta2FyamFkaGF2In0.pjto7VpnUieH2pzCpgq6s12bBaUqNNDko0umzf7nIoE";

  let store = null;

  // Create a new instace of store before running every test
  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
        posts: postsReducer,
        users: usersReducer,
      },
    });
  });

  test("this api should set the postsStatus as pending and start fetching posts", async () => {
    //  set mock response first, though we wont be needing it for "pending" test

    const expectedState = [
      {
        _id: "400b4e5a-21a1-46e6-bc8f-bf9e1167a9b1",
        content:
          "Are you a anime fan? Let me know your favourite pick in comments.",
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "omkarjadhav",
        comments: [
          {
            _id: "6f00e130-c50e-4f05-a35d-08326019420a",
            username: "shubhamsoni",
            text: "One piece for sure!",
            votes: {
              upvotedBy: [],
              downvotedBy: [],
            },
          },
          {
            _id: "9848259c-e8ff-4115-9a0c-1793199f6e06",
            username: "sohamshah",
            text: "Nothing can beat Naruto!",
            votes: {
              upvotedBy: [],
              downvotedBy: [],
            },
          },
        ],
        createdAt: "2022-09-18T00:17:31+05:30",
        updatedAt: "2022-09-18T00:17:31+05:30",
        id: "1",
      },
    ];

    // mocking api get call response with our own data
    axios.get.mockResolvedValue({ data: { posts: expectedState } });

    // calling the api, NOTE that we havent used "await" keyword here to not
    // wait for the call to either be fulfilled ot rejected. We want the promise
    // to be unresolved for pending status check
    const result = store.dispatch(getAllPosts());

    // Now check if our state has updated or not. At this point, only our postsStatus
    // should be updated to "pending"
    const state = store.getState().posts;

    expect(state).toEqual({
      allPosts: [],
      postsStatus: "pending",
    });
  });

  test("this api should get all posts and set the state", async () => {
    //  set mock response first

    const expectedState = [
      {
        _id: "400b4e5a-21a1-46e6-bc8f-bf9e1167a9b1",
        content:
          "Are you a anime fan? Let me know your favourite pick in comments.",
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "omkarjadhav",
        comments: [
          {
            _id: "6f00e130-c50e-4f05-a35d-08326019420a",
            username: "shubhamsoni",
            text: "One piece for sure!",
            votes: {
              upvotedBy: [],
              downvotedBy: [],
            },
          },
          {
            _id: "9848259c-e8ff-4115-9a0c-1793199f6e06",
            username: "sohamshah",
            text: "Nothing can beat Naruto!",
            votes: {
              upvotedBy: [],
              downvotedBy: [],
            },
          },
        ],
        createdAt: "2022-09-18T00:17:31+05:30",
        updatedAt: "2022-09-18T00:17:31+05:30",
        id: "1",
      },
    ];

    // mocking api get call response with our own data
    axios.get.mockResolvedValue({ data: { posts: expectedState } });

    // actually calling our dispatch to call api(but will actually get mock data and not actually hit api)
    // and then setting our state. Used store.dispatch as useDispatch does not work here
    const result = await store.dispatch(getAllPosts());

    // our result is an object with type and payload and some other irrelevant meta data
    const allPosts = result.payload;

    // First check if the type of response is fulfilled or not
    expect(result.type).toEqual("posts/getAllPosts/fulfilled");

    // Now check if we have received the correct data in our payload or not
    expect(allPosts).toEqual(expectedState);

    // Now check if our state has updated or not
    const state = store.getState().posts;

    expect(state).toEqual({
      allPosts: expectedState,
      postsStatus: "fulfilled",
    });
  });

  test("this api should add post in backend and set the state", async () => {
    //  set mock response first

    const expectedState = [
      {
        _id: "352c7156-6957-428e-aaf4-e2461f905c8a",
        content: "yello!",
        comments: [],
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        username: "omkarjadhav",
        createdAt: "2022-11-25T15:27:38+05:30",
        updatedAt: "2022-11-25T15:27:38+05:30",
        id: "6",
      },
    ];

    const newPost = {
      _id: "352c7156-6957-428e-aaf4-e2461f905c8a",
      content: "yello!",
      comments: [],
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "omkarjadhav",
      createdAt: "2022-11-25T15:27:38+05:30",
      updatedAt: "2022-11-25T15:27:38+05:30",
      id: "6",
    };

    // mocking api get call response with our own data
    axios.mockResolvedValue({ data: { posts: expectedState } });

    // actually calling our dispatch to call api(but will actually get mock data and not actually hit api)
    // and then setting our state. Used store.dispatch as useDispatch does not work here
    const result = await store.dispatch(addPost({ post: newPost, token }));

    // our result is an object with type and payload and some other irrelevant meta data
    const allPosts = result.payload;

    // First check if the type of response is fulfilled or not
    expect(result.type).toEqual("posts/addPost/fulfilled");

    // Now check if we have received the correct data in our payload or not
    expect(allPosts).toEqual(expectedState);

    // Now check if our state has updated or not
    const state = store.getState().posts;
    expect(state).toEqual({
      allPosts: expectedState,
      postsStatus: "fulfilled",
    });
  });
});
