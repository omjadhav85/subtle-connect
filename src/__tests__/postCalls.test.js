import { getAllPosts, initialState } from "../features/Home/postsSlice";
import axios from "axios";
import { store } from "../app/store";

jest.mock("axios");

describe("this test is for all api calls on post actions", () => {
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
});
