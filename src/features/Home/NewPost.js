import { ButtonPrimary, ButtonSecondary, CircleAvatar } from "../../components";
import { MdOutlineImage, MdOutlineEmojiEmotions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addPost, editPost } from "./postsSlice";

export const NewPost = ({ oldPost, setShowModal }) => {
  const dispatch = useDispatch();

  const { userData, token } = useSelector((state) => state.auth);

  const defaultPost = {
    content: "",
    comments: [],
  };

  const [newPost, setNewPost] = useState(defaultPost);
  const [editMode, setEditMode] = useState(false);

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (editMode) {
      //TODO: edit the post
      dispatch(editPost({ post: newPost, token }));
      setEditMode(false);
      setShowModal(false);
    } else {
      if (newPost.content.length > 0) {
        dispatch(addPost({ post: newPost, token }));
        setNewPost(defaultPost);
      }
    }
  };

  useEffect(() => {
    // In case of edit mode, set the local newPost state to passed state i.e. old post
    if (oldPost) {
      setNewPost(oldPost);
      setEditMode(true);
    }
  }, []);

  return (
    <div className="flex h-40 gap-4 bg-white p-4 rounded-md">
      <CircleAvatar imgSrc="https://picsum.photos/200/200" />
      <form className="flex-1 flex flex-col gap-4" onSubmit={addNoteHandler}>
        <textarea
          name=""
          id=""
          placeholder="What's on your mind?"
          className="focus:outline-none p-2 bg-background rounded-md resize-none"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-primary">
            <MdOutlineImage size={20} />
            <MdOutlineEmojiEmotions size={20} />
          </div>
          {editMode && (
            <ButtonSecondary
              text="Cancel"
              otherClasses="py-2"
              onClickHandler={(e) => {
                e.preventDefault();
                setShowModal(false);
                setEditMode(false);
              }}
            />
          )}
          {editMode ? (
            <ButtonPrimary text="Edit" otherClasses="w-16 py-2" />
          ) : (
            <ButtonPrimary text="Post" otherClasses="w-16 py-2" />
          )}
        </div>
      </form>
    </div>
  );
};
