import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="self-center mx-auto w-1/2 flex flex-col bg-white rounded-md p-4">
      <heading className="mt-4 mb-2">
        <div className="text-3xl text-primary font-heading text-center">
          Welcome to Subtle Connect
        </div>
      </heading>
      <div className="p-8">
        <h1 className="text-2xl font-semibold pb-2 mb-6 text-center border-b border-primary">
          Sign In
        </h1>
        <form className="flex flex-col">
          <label for="">Email</label>
          <Input
            type="text"
            value={userName}
            onChangeHandler={(e) => setUserName(e.target.value)}
            placeholder="abc@xyz.com"
            isRequired={true}
          />
          <label for="" className="mt-3">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChangeHandler={(e) => setPassword(e.target.value)}
            placeholder="*******"
            isRequired={true}
          />
          <button
            className="mt-6 rounded-md p-3 bg-primary text-white"
            type="submit"
          >
            Log In
          </button>
          <button className="mt-6 rounded-md p-3 border border-primary">
            Login as guest
          </button>
          <Link to="/" className="mt-6 text-center underline">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};
