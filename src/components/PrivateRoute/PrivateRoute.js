import { Outlet, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  return (
    <div className="flex-1 flex justify-between">
      <SideBar />
      <Outlet />
      <FollowBar />
    </div>
  );
};
