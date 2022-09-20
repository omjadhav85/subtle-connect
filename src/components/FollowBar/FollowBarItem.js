import { CircleAvatar } from "../Avatar/CircleAvatar";
import { MdAdd, MdCheck } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../features/Profile/usersSlice";
import { useNavigate } from "react-router-dom";

export const FollowBarItem = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  const dispatch = useDispatch();

  const { token, userData } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const isAlreadyFollowed = userData.following.some(
    (userAlreadyFollowed) => userAlreadyFollowed.username === user.username
  );

  return (
    <div className="flex items-center gap-2 border-b pb-2 ">
      <CircleAvatar
        imgSrc={user.image}
        onClickHandler={() => navigate(`/profile/${user._id}`)}
        otherClasses="cursor-pointer"
      />
      <div
        className="flex-1 cursor-pointer"
        onClick={() => navigate(`/profile/${user._id}`)}
      >
        <h1 className="font-semibold">{fullName}</h1>
        <small>{`@${user.username}`}</small>
      </div>
      {isAlreadyFollowed ? (
        <MdCheck
          size={25}
          className="text-primary cursor-pointer"
          onClick={() =>
            dispatch(unfollowUser({ userToUnfollow: user, token }))
          }
        />
      ) : (
        <MdAdd
          size={25}
          className="text-primary cursor-pointer"
          onClick={() => dispatch(followUser({ userToFollow: user, token }))}
        />
      )}
    </div>
  );
};
