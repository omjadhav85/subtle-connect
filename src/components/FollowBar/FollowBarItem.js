import { CircleAvatar } from "../Avatar/CircleAvatar";
import { MdAdd } from "react-icons/md";

export const FollowBarItem = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="flex items-center gap-2 border-b pb-2 ">
      <CircleAvatar imgSrc={user.image} />
      <div className="flex-1">
        <h1 className="font-semibold">{fullName}</h1>
        <small>{`@${user.username}`}</small>
      </div>
      <MdAdd size={25} className="text-primary" />
    </div>
  );
};
