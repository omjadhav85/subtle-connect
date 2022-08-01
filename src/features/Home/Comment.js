import { CircleAvatar } from "../../components";

export const Comment = ({ comment }) => {
  return (
    <div class="flex gap-4 items-center">
      <CircleAvatar
        imgSrc="https://picsum.photos/200/200"
        otherClasses="w-10 h-10"
      />
      <div className="flex-1 flex flex-col rounded-md bg-background p-2">
        <h1 className="font-semibold">{comment.username}</h1>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
