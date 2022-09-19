import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Post, NewPost, PostModal } from "../../components/";
import dayjs from "dayjs";

export const Home = () => {
  const { allPosts, postsStatus } = useSelector((state) => state.posts);

  const [showModal, setShowModal] = useState(false);

  const [oldPost, setOldPost] = useState({});

  const [sortBy, setSortBy] = useState("Trending");

  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  // Show only user's posts and the posts of the profiles user follows
  const postsToShow = allPosts.filter(
    (post) =>
      post.username === userData.username ||
      userData.following.some((user) => user.username === post.username)
  );

  const sortPosts = (posts) => {
    const tempPosts = [...posts];

    switch (sortBy) {
      case "Trending":
        tempPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
        break;

      case "Latest":
        tempPosts.sort((a, b) => {
          const date1 = dayjs(a.createdAt);
          const date2 = dayjs(b.createdAt);
          return date2.diff(date1);
        });
        break;

      case "Oldest":
        tempPosts.sort((a, b) => {
          const date1 = dayjs(a.createdAt);
          const date2 = dayjs(b.createdAt);
          return date1.diff(date2);
        });
        break;

      default:
        break;
    }

    return tempPosts;
  };

  const sortedPosts = sortPosts(postsToShow);

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <NewPost />
      <div>
        <label htmlFor="sort-by" className="mr-2">
          Sort By:
        </label>
        <select
          name="sort-by"
          id="sort-by"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          className="px-2 py-1 rounded-md outline-none focus-within:ring-1 focus-within:ring-primary"
        >
          <option value="Trending">Trending</option>
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      {sortedPosts.length > 0 ? (
        sortedPosts.map((post) => (
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
