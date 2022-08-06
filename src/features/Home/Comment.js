import { CircleAvatar } from "../../components";
import { useSelector } from "react-redux";

export const Comment = ({ comment }) => {
  const { allUsers } = useSelector((state) => state.users);
  const fullName = `${allUsers[comment.username]?.firstName} ${
    allUsers[comment.username]?.lastName
  }`;
  return (
    <div className="flex gap-4 items-center">
      <CircleAvatar
        imgSrc={allUsers[comment.username]?.image}
        otherClasses="w-10 h-10"
      />
      <div className="flex-1 flex flex-col rounded-md bg-background p-2">
        <h1 className="font-semibold">{fullName}</h1>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
