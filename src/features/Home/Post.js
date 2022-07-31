import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdAdd } from "react-icons/md";
import { CircleAvatar, Input } from "../../components";

export const Post = () => {
  return (
    <div class="flex flex-col p-4 rounded-md bg-white gap-4">
      <div class="flex gap-2">
        <CircleAvatar imgSrc="https://picsum.photos/200/200" />
        <div className="flex flex-col">
          <h1>Omkar Jadhav @omkarjadhav</h1>
          <small>2022/1/25 16:20</small>
        </div>
      </div>
      <div>The best investments are “buy and forget.”</div>
      <div class="flex gap-4 ">
        <div className="flex gap-2 items-center">
          <AiOutlineHeart />
          <p>Like</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineBookmarkBorder />
          <p>bookmark</p>
        </div>
      </div>
      <div class="flex gap-4 items-center">
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
    </div>
  );
};
