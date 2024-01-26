import Header from "./Header";
import BgImg from "../assets/bg-img.jpg";
import { useState } from "react";
const Login = () => {
  const [isSingIn, setSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BgImg} alt="" />
      </div>
      <form
        action=""
        className="w-2/6 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold">
          {isSingIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSingIn ? "New to Netfilx?" : "Already Registered?"}
          <span
            className="font-bold pl-2 cursor-pointer"
            onClick={() => setSignIn(!isSingIn)}
          >
            {isSingIn ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
