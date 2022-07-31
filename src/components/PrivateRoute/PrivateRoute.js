import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { SideBar } from "../SideBar/SideBar";
import { FollowBar } from "../FollowBar/FollowBar";

export const PrivateRoute = ({ children }) => {
  return (
    <div className="flex-1 flex justify-between">
      <SideBar />
      <Outlet />
      <FollowBar />
    </div>
  );
};
