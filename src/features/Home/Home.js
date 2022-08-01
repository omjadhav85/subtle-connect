import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "./postsSlice";

export const Home = () => {
  const { allPosts, postsStatus } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <NewPost />
      {allPosts.length > 0 &&
        allPosts.map((post) => <Post post={post} key={post._id} />)}
    </div>
  );
};
