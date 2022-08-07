import { useSelector } from "react-redux";
import { Post, PostModal } from "../../components";
import { useState } from "react";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.posts);
  const [showModal, setShowModal] = useState(false);
  const [oldPost, setOldPost] = useState({});

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      {allPosts.length > 0 ? (
        allPosts.map((post) => (
          <Post
            post={post}
            key={post._id}
            setShowModal={setShowModal}
            setOldPost={setOldPost}
          />
        ))
      ) : (
        <p className="text-center mt-6">No posts to show.</p>
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
