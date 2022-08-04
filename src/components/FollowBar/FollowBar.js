import { Input } from "../Input/Input";
import { FollowBarItem } from "./FollowBarItem";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const FollowBar = () => {
  const [text, setText] = useState("");

  // const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  // console.log("users: ", allUsers);

  return (
    <aside className="flex flex-col  py-6 w-1/4 sticky top-0 h-screen ml-4">
      <Input
        type="text"
        value={text}
        onChangeHandler={(e) => setText(e.target.value)}
        placeholder="Search users"
        isRequired={true}
        leftIcon={<MdSearch size={25} />}
        // onRightIconClick={() => setShowPassword(!showPassword)}
        otherClasses="mb-4 bg-white"
      />
      <ul className="flex flex-col gap-4 bg-white p-4 rounded-md">
        {Object.keys(allUsers)
          .slice(0, 5)
          .map(
            (user) =>
              user !== userData.username && (
                <FollowBarItem user={allUsers[user]} />
              )
          )}
        {/* <FollowBarItem />
        <FollowBarItem />
        <FollowBarItem />
        <FollowBarItem /> */}
      </ul>
    </aside>
  );
};
