import { ButtonPrimary, CircleAvatar } from "../../components";
import { MdOutlineImage, MdOutlineEmojiEmotions } from "react-icons/md";

export const NewPost = () => {
  return (
    <div class="flex h-40 gap-4 bg-white p-4 rounded-md">
      <CircleAvatar imgSrc="https://picsum.photos/200/200" />
      <form className="flex-1 flex flex-col gap-4">
        <textarea
          name=""
          id=""
          placeholder="What's on your mind?"
          className="focus:outline-none p-2 bg-background rounded-md resize-none"
        ></textarea>

        <div class="flex justify-between items-center">
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
