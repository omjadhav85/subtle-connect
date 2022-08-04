import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdAdd, MdMoreVert } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CircleAvatar, Input } from "../../components";
import { Comment } from "./Comment";
import { deletePost } from "./postsSlice";

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

  const postCreationDate = new Date(createdAt);

  const { token, userData } = useSelector((state) => state.auth);

  const isOwnPost = userData.username === username;

  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-4 rounded-md bg-white gap-4">
      <div className="flex gap-2">
        <CircleAvatar imgSrc="https://picsum.photos/200/200" />
        <div className="flex flex-col flex-1">
          <h1>{`User's Name @${username}`}</h1>
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
              <ul className="flex flex-col gap-2 absolute top-6 right-0 bg-background">
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
        <div className="flex gap-2 items-center">
          <AiOutlineHeart />
          <p>Like</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineBookmarkBorder />
          <p>Bookmark</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <CircleAvatar
          imgSrc="https://picsum.photos/200/200"
          otherClasses="w-10 h-10"
        />
        <Input
          type="text"
          rightIcon={<MdAdd />}
          otherClasses="flex-1"
          placeholder="Enter comment..."
        />
      </div>
      {comments.length > 0 &&
        comments.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};
