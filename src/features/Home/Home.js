import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Post, NewPost, PostModal } from "../../components/";

export const Home = () => {
  const { allPosts, postsStatus } = useSelector((state) => state.posts);

  const [showModal, setShowModal] = useState(false);

  const [oldPost, setOldPost] = useState({});

  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  // Show only user's posts and the posts of the profiles user follows
  const postsToShow = allPosts.filter(
    (post) =>
      post.username === userData.username ||
      userData.following.some((user) => user.username === post.username)
  );

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <NewPost />
      {postsToShow.length > 0 ? (
        postsToShow.map((post) => (
          <Post
            post={post}
            key={post._id}
            setShowModal={setShowModal}
            setOldPost={setOldPost}
          />
        ))
      ) : (
        <p className="text-center mt-6">
          Follow other users to see their posts on your feed.
        </p>
      )}
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
