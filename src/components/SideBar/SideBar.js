import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineBookmarkBorder,
  MdOutlineNotificationsNone,
  MdMoreHoriz,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ButtonPrimary } from "../Button";
import { SideBarItem } from "./SideBarItem";
import { NavLink } from "react-router-dom";
import { CircleAvatar } from "../Avatar/CircleAvatar";
import Logo from "../../assets/social_media_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/Authentication/authSlice";

export const SideBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#1D9BF0",
  };

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.auth);
  return (
    <aside className="flex flex-col justify-between pb-6 w-1/4 sticky top-0 h-screen mr-4">
      <div>
        <div className="flex items-center" style={{ marginLeft: "-1.2rem" }}>
          <div className="w-24 h-24">
            <img src={Logo} alt="" />
          </div>
          <h1 className="text-3xl font-heading text-primary">SubtleConnect</h1>
        </div>
        <ul className="flex flex-col gap-2">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <SideBarItem icon={<MdOutlineHome size={25} />} text="Home" />
          </NavLink>

          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <SideBarItem icon={<MdOutlineExplore size={25} />} text="Explore" />
          </NavLink>

          <NavLink
            to="/bookmarks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <SideBarItem
              icon={<MdOutlineBookmarkBorder size={25} />}
              text="Bookmarks"
            />
          </NavLink>
          <NavLink
            to="/notifications"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <SideBarItem
              icon={<MdOutlineNotificationsNone size={25} />}
              text="Notifications"
            />
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <SideBarItem icon={<CgProfile size={25} />} text="Profile" />
          </NavLink>
        </ul>
        <ButtonPrimary
          text="Logout"
          otherClasses="w-full mt-4"
          onClickHandler={() => dispatch(userLogout())}
        />
      </div>
      <div className="flex items-center gap-2">
        <CircleAvatar imgSrc={userData.image} />
        <div className="flex-1">
          <h1 className="font-semibold">{`${userData.firstName} ${userData.lastName}`}</h1>
          <small>{`@${userData.username}`}</small>
        </div>
        <MdMoreHoriz size={25} />
      </div>
    </aside>
  );
};
