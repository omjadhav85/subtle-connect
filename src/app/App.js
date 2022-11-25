import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Explore, Bookmarks, Profile } from "../features";
import { PrivateRoute } from "../components";
import { Toaster } from "react-hot-toast";
import { getAllUsers } from "../features/Profile/usersSlice";
import { getAllPosts } from "../features/Home/postsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initialSetup = async () => {
      dispatch(getAllPosts());
      dispatch(getAllUsers());
    };

    initialSetup();
  }, []);

  return (
    <div className="min-h-screen flex container max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route
            path="/notifications"
            element={<div className="flex-1">Notifications</div>}
          />
          <Route path="/profile/:profileId" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster
        position="bottom-center"
        containerStyle={{
          bottom: 40,
        }}
      />
    </div>
  );
};

export default App;
