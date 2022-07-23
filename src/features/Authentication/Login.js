import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/social_media_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./authSlice";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { token, authStatus } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin({ username, password }));
  };

  const guestCredentials = {
    username: "omkarjadhav",
    password: "abc123",
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="self-center mx-auto w-1/2 flex flex-col bg-white rounded-md p-4 shadow-md">
      {authStatus === "pending" ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="mt-4 mb-2 flex items-center">
            <div className="h-24 w-24">
              <img src={Logo} alt="" />
            </div>

            <div className="text-3xl text-primary font-heading text-center">
              Welcome to Subtle Connect
            </div>
          </div>
          <div className="p-8 pt-0">
            <h1 className="text-2xl font-semibold pb-2 mb-6 text-center border-b border-primary">
              Sign In
            </h1>
            <form className="flex flex-col" onSubmit={handleFormSubmit}>
              <label htmlFor="">Username</label>
              <Input
                type="text"
                value={username}
                onChangeHandler={(e) => setUsername(e.target.value)}
                placeholder="coolCoder123"
                isRequired={true}
              />
              <label htmlFor="" className="mt-3">
                Password
              </label>
              <Input
                type={`${showPassword ? "text" : "password"}`}
                value={password}
                onChangeHandler={(e) => setPassword(e.target.value)}
                placeholder="*******"
                isRequired={true}
                rightIcon={
                  showPassword ? (
                    <FaEye size={20} color="grey" />
                  ) : (
                    <FaEyeSlash size={20} color="grey" />
                  )
                }
                onRightIconClick={() => setShowPassword(!showPassword)}
              />
              <button
                className="mt-6 rounded-md p-3 bg-primary text-white"
                type="submit"
              >
                Log In
              </button>
              <button
                className="mt-6 rounded-md p-3 border border-primary"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(userLogin(guestCredentials));
                }}
              >
                Login as guest
              </button>
              <Link to="/signup" className="mt-6 text-center underline">
                Create account
              </Link>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
