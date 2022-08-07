import { CircleAvatar } from "../Avatar/CircleAvatar";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../features/Profile/usersSlice";

export const FollowBarItem = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  return (
    <div className="flex items-center gap-2 border-b pb-2 ">
      <CircleAvatar imgSrc={user.image} />
      <div className="flex-1">
        <h1 className="font-semibold">{fullName}</h1>
        <small>{`@${user.username}`}</small>
      </div>
      <MdAdd
        size={25}
        className="text-primary cursor-pointer"
        onClick={() =>
          dispatch(followUser({ userToFollow: user, token, dispatch }))
        }
      />
    </div>
  );
};
