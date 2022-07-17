import { Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  return (
    <div className="flex-1 flex justify-between">
      <div>Side Menu Bar</div>
      <Outlet />
      <div>Users to follow</div>
    </div>
  );
};
