import { CircleAvatar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { MdMoreVert } from "react-icons/md";
import { deleteComment } from "./postsSlice";

export const Comment = ({ comment, post }) => {
  const { allUsers } = useSelector((state) => state.users);
  const { userData, token } = useSelector((state) => state.auth);

  const fullName = `${allUsers[comment.username]?.firstName} ${
    allUsers[comment.username]?.lastName
  }`;
  const isOwnComment = comment.username === userData.username;
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-center">
      <CircleAvatar
        imgSrc={allUsers[comment.username]?.image}
        otherClasses="w-10 h-10"
      />
      <div className="flex-1 flex rounded-md bg-background p-2">
        <div className="flex-1 flex flex-col ">
          <h1 className="font-semibold">{fullName}</h1>
          <p>{comment.text}</p>
        </div>
        {isOwnComment && (
          <div className="relative">
            <MdMoreVert
              size={25}
              className=" rounded-full cursor-pointer hover:bg-slate-200 p-1"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <ul className="flex flex-col gap-2 absolute top-6 right-0 bg-background border border-slate-500">
                {/* <li
                  className="p-2 hover:bg-slate-300 cursor-pointer"
                  onClick={() => {
                    setShowModal(true);
                    setOldPost(post);
                  }}
                >
                  Edit
                </li> */}
                <li
                  className="p-2 hover:bg-slate-300 cursor-pointer"
                  onClick={() => {
                    dispatch(deleteComment({ post, comment, token }));
                    setShowMenu(false);
                  }}
                >
                  Delete
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
