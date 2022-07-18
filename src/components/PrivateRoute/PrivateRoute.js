import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    <div className="flex-1 flex justify-between">
      <div>Side Menu Bar</div>
      <Outlet />
      <div>Users to follow</div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
