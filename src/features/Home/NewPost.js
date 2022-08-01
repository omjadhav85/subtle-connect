import { ButtonPrimary, CircleAvatar } from "../../components";
import { MdOutlineImage, MdOutlineEmojiEmotions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost } from "./postsSlice";

export const NewPost = () => {
  const dispatch = useDispatch();

  const { userData, token } = useSelector((state) => state.auth);

  const [newPost, setNewPost] = useState("");

  const addNoteHandler = (e) => {
    e.preventDefault();
    console.log("adding new post");
    if (newPost.length > 0) {
      dispatch(addPost({ post: { content: newPost, comments: [] }, token }));
      setNewPost("");
    }
  };

  return (
    <div className="flex h-40 gap-4 bg-white p-4 rounded-md">
      <CircleAvatar imgSrc="https://picsum.photos/200/200" />
      <form className="flex-1 flex flex-col gap-4" onSubmit={addNoteHandler}>
        <textarea
          name=""
          id=""
          placeholder="What's on your mind?"
          className="focus:outline-none p-2 bg-background rounded-md resize-none"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-primary">
            <MdOutlineImage size={20} />
            <MdOutlineEmojiEmotions size={20} />
          </div>
          <ButtonPrimary text="Post" otherClasses="w-16 py-2" />
        </div>
      </form>
    </div>
  );
};
