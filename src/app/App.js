import { Routes, Route } from "react-router-dom";
import { Login } from "../features";

const App = () => {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="min-h-screen flex justify-between">
        {/* <div>Side Menu Bar</div> */}
        <Routes>
          <Route path="/" element={<h1 className="flex-1">Hello</h1>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <div>Users to follow</div> */}
      </div>
    </div>
  );
};

export default App;
