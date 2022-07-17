import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "../features";
import { PrivateRoute } from "../components";

const App = () => {
  return (
    <div className="min-h-screen flex container max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<div className="flex-1">Homepage</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
