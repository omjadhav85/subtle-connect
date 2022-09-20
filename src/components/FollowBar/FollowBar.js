import { Input } from "../Input/Input";
import { FollowBarItem } from "./FollowBarItem";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const FollowBar = () => {
  const [text, setText] = useState("");

  const { allUsers } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  const checkIsAlreadyFollowed = (userToCheck) => {
    return userData.following.some((user) => user.username === userToCheck);
  };

  const followSuggestions = Object.keys(allUsers).filter(
    (user) => user !== userData.username && !checkIsAlreadyFollowed(user)
  );

  let userSearchList = [];

  if (text.length > 0) {
    userSearchList = Object.keys(allUsers).filter(
      (user) =>
        user.toLowerCase().includes(text.toLowerCase()) ||
        (allUsers[user].firstName + allUsers[user].lastName)
          .toLowerCase()
          .includes(text.toLowerCase())
    );
  }

  return (
    <aside className="flex flex-col  py-6 w-1/4 sticky top-0 h-screen ml-4">
      <Input
        type="text"
        value={text}
        onChangeHandler={(e) => setText(e.target.value)}
        placeholder="Search users"
        isRequired={true}
        leftIcon={<MdSearch size={25} />}
        otherClasses="mb-4 bg-white"
      />
      <ul className="flex flex-col gap-4 bg-white p-4 rounded-md">
        {text.length > 0
          ? userSearchList
              .slice(0, 5)
              .map((user) => <FollowBarItem user={allUsers[user]} key={user} />)
          : followSuggestions
              .slice(0, 5)
              .map((user) => (
                <FollowBarItem user={allUsers[user]} key={user} />
              ))}
      </ul>
    </aside>
  );
};
