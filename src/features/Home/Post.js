import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdAdd, MdMoreVert } from "react-icons/md";
import { useSelector } from "react-redux";
import { CircleAvatar, Input } from "../../components";
import { Comment } from "./Comment";

export const Post = ({ post }) => {
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

  const { userData } = useSelector((state) => state.auth);

  const isOwnPost = userData.username === username;

  return (
    <div className="flex flex-col p-4 rounded-md bg-white gap-4">
      <div className="flex gap-2">
        <CircleAvatar imgSrc="https://picsum.photos/200/200" />
        <div className="flex flex-col flex-1">
          <h1>{`User's Name @${username}`}</h1>
          <small>{`${postCreationDate.toLocaleDateString()}  ${postCreationDate.toLocaleTimeString()}`}</small>
        </div>
        {isOwnPost && <MdMoreVert size={20} />}
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
