import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllPosts } from "./postsSlice";
import { PostModal } from "./PostModal";
import { getAllUsers } from "../Users/usersSlice";

export const Home = () => {
  const { allPosts, postsStatus } = useSelector((state) => state.posts);

  const [showModal, setShowModal] = useState(false);

  const [oldPost, setOldPost] = useState({});

  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <NewPost />
      {allPosts.length > 0 &&
        allPosts.map((post) => (
          <Post
            post={post}
            key={post._id}
            setShowModal={setShowModal}
            setOldPost={setOldPost}
          />
        ))}
      {showModal && (
        <PostModal
          oldPost={oldPost}
          setOldPost={setOldPost}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
