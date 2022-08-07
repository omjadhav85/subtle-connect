import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  MdOutlineBookmarkBorder,
  MdAdd,
  MdMoreVert,
  MdBookmark,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CircleAvatar, Input } from "../../components";
import { Comment } from "../../features/Home/Comment";
import {
  addComment,
  deletePost,
  dislikePost,
  likePost,
} from "../../features/Home/postsSlice";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../../features/Profile/usersSlice";

export const Post = ({ post, setShowModal, setOldPost }) => {
  const {
    _id: postId,
    username,
    createdAt,
    updatedAt,
    content,
    comments,
    likes,
  } = post;

  const [comment, setComment] = useState("");

  const postCreationDate = new Date(createdAt);

  const { token, userData } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.users);

  const fullName = `${allUsers[username]?.firstName} ${allUsers[username]?.lastName}`;

  const isOwnPost = userData.username === username;

  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const isLiked = likes.likedBy.some((user) => user._id === userData._id);

  const isBookmarked = userData.bookmarks.some((item) => item._id === post._id);

  const toggleLike = () => {
    isLiked
      ? dispatch(dislikePost({ post, token }))
      : dispatch(likePost({ post, token }));
  };

  const toggleBookmark = () => {
    isBookmarked
      ? dispatch(removeBookmarkPost({ user: userData, post, token }))
      : dispatch(bookmarkPost({ user: userData, post, token }));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ post, comment, token }));
    setComment("");
  };

  return (
    <div className="flex flex-col p-4 rounded-md bg-white gap-4">
      <div className="flex gap-2">
        <CircleAvatar imgSrc={allUsers[username]?.image} />
        <div className="flex flex-col flex-1">
          <h1>
            {fullName}{" "}
            <span className="text-slate-400 text-sm">{` @${username}`}</span>
          </h1>
          <small>{`${postCreationDate.toLocaleDateString()}  ${postCreationDate.toLocaleTimeString()}`}</small>
        </div>
        {isOwnPost && (
          <div className="relative">
            <MdMoreVert
              size={25}
              className=" rounded-full cursor-pointer hover:bg-slate-200 p-1"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <ul className="flex flex-col gap-2 absolute top-6 right-0 bg-background border border-slate-500">
                <li
                  className="p-2 hover:bg-slate-300 cursor-pointer"
                  onClick={() => {
                    setShowModal(true);
                    setOldPost(post);
                  }}
                >
                  Edit
                </li>
                <li
                  className="p-2 hover:bg-slate-300 cursor-pointer"
                  onClick={() => dispatch(deletePost({ post, token }))}
                >
                  Delete
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <div>{content}</div>
      <div className="flex gap-4 ">
        <div
          className={`flex gap-2 items-center cursor-pointer`}
          onClick={() => toggleLike()}
        >
          {isLiked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
          <p>Like</p>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => toggleBookmark()}
        >
          {isBookmarked ? (
            <MdBookmark color="red" />
          ) : (
            <MdOutlineBookmarkBorder />
          )}

          <p>Bookmark</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <CircleAvatar imgSrc={userData?.image} otherClasses="w-10 h-10" />
        <form className="flex-1" onSubmit={(e) => handleAddComment(e)}>
          <Input
            type="text"
            rightIcon={<MdAdd />}
            otherClasses="flex-1"
            placeholder="Enter comment..."
            value={comment}
            onChangeHandler={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment comment={comment} post={post} key={comment._id} />
        ))}
    </div>
  );
};
