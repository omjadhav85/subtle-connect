import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { SideBar } from "../SideBar/SideBar";
import { FollowBar } from "../FollowBar/FollowBar";

export const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    <div className="flex-1 flex justify-between">
      <SideBar />
      <Outlet />
      <FollowBar />
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
