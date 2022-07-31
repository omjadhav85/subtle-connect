import { CircleAvatar } from "../Avatar/CircleAvatar";
import { MdAdd } from "react-icons/md";

export const FollowBarItem = () => {
  return (
    <div className="flex items-center gap-2 border-b pb-2 ">
      <CircleAvatar imgSrc="https://picsum.photos/200/200" />
      <div className="flex-1">
        <h1 className="font-semibold">Omkar Jadhav</h1>
        <small>@omkarjadhav</small>
      </div>
      <MdAdd size={25} className="text-primary" />
    </div>
  );
};
