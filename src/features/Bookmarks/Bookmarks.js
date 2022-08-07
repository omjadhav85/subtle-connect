import { useSelector } from "react-redux";
import { Post, PostModal } from "../../components";
import { useState } from "react";

export const Bookmarks = () => {
  const { userData } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [oldPost, setOldPost] = useState({});
  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      {userData.bookmarks.length > 0 ? (
        userData.bookmarks.map((post) => (
          <Post
            post={post}
            key={post._id}
            setShowModal={setShowModal}
            setOldPost={setOldPost}
          />
        ))
      ) : (
        <p className="text-center mt-6">No post bookmarked yet.</p>
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
