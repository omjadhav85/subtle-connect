import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/social_media_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "./authSlice";

export const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, authStatus } = useSelector((state) => state.auth);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      userSignup({
        username: userDetails.userName,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
      })
    );
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
          {" "}
          <heading className="mt-4 mb-2 flex items-center">
            <div className="h-24 w-24">
              <img src={Logo} alt="" />
            </div>
            <div className="text-3xl text-primary font-heading text-center">
              Welcome to Subtle Connect
            </div>
          </heading>
          <div className="p-8 pt-0">
            <h1 className="text-2xl font-semibold pb-2 mb-6 text-center border-b border-primary">
              Sign Up
            </h1>
            <form className="flex flex-col" onSubmit={handleFormSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label for="">First Name</label>
                  <Input
                    type="text"
                    value={userDetails.firstName}
                    onChangeHandler={(e) =>
                      setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                    }
                    placeholder="Ken"
                    isRequired={true}
                  />
                </div>

                <div className="flex-1">
                  <label for="">Last Name</label>
                  <Input
                    type="text"
                    value={userDetails.lastName}
                    onChangeHandler={(e) =>
                      setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                    }
                    placeholder="Adams"
                    isRequired={true}
                  />
                </div>
              </div>
              <label for="" className="mt-3">
                Username
              </label>
              <Input
                type="text"
                value={userDetails.userName}
                onChangeHandler={(e) =>
                  setUserDetails({ ...userDetails, userName: e.target.value })
                }
                placeholder="coolCoder123"
                isRequired={true}
              />
              <label for="" className="mt-3">
                Password
              </label>
              <Input
                type={`${showPassword ? "text" : "password"}`}
                value={userDetails.password}
                onChangeHandler={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
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
              <label for="" className="mt-3">
                Confirm Password
              </label>
              <Input
                type={`${showConfirmPassword ? "text" : "password"}`}
                value={userDetails.confirmPassword}
                onChangeHandler={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="*******"
                isRequired={true}
                rightIcon={
                  showConfirmPassword ? (
                    <FaEye size={20} color="grey" />
                  ) : (
                    <FaEyeSlash size={20} color="grey" />
                  )
                }
                onRightIconClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              />
              {userDetails.password !== userDetails.confirmPassword && (
                <p className="text-red-600 text-center mt-4">
                  Password and Confirm password does not match
                </p>
              )}
              <button
                className="mt-6 rounded-md p-3 bg-primary text-white disabled:bg-slate-400 disabled:cursor-not-allowed"
                type="submit"
                disabled={userDetails.password !== userDetails.confirmPassword}
              >
                Sign up
              </button>
              <Link to="/login" className="mt-6 text-center underline">
                Already have an account? Log in!
              </Link>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
//
