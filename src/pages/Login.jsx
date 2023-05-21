import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { useGoogleLogin } from "@react-oauth/google";
import GoogleLogin from "../components/GoogleLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `https://km4-challenge-5-api.up.railway.app/api/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      console.log(token);

      localStorage.setItem("token", token);

      window.location.href = "/dashboard";
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {/* Container */}
      <div className="grid grid-cols-2 h-[100vh] font-quicksand">
        {/* Left */}
        <div className="flex flex-col w-full p-28 bg-white text-black border">
          <div className="flex flex-col gap-3 items-center">
            <img src="icons/binar_icon.png" alt="" width="50px" />
            <h1 className="font-bold text-4xl">Welcome Back!</h1>
          </div>
          {/* Form */}
          <form action="" className="flex flex-col mt-8 gap-3">
            {/* Email Input */}
            <div className="relative w-full flex items-center">
              <img src="/icons/email_icon.svg" alt="" className="absolute w-[20px] left-3" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-gray-200 border border-gray-200 pl-10 py-[10px] pr-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-[#7A187D] invalid:focus:border-red-600"
              />
            </div>
            {/* Email Input End */}

            {/* Password Input */}
            <div className="relative w-full flex items-center">
              <img src="/icons/password_icon.svg" alt="" className="absolute w-[20px] left-3" />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-gray-200 border border-gray-200 pl-10 py-[10px] pr-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-[#7A187D] invalid:focus:border-red-600"
              />
            </div>
            {/* Password Input End */}
            {/* Submit Button */}
            <button type="submit" onClick={handleSubmit} className="w-full bg-[#121a1f] py-3 rounded-[5px] text-white hover:bg-[#1f2c35] active:scale-95 transition">
              Login
            </button>
            {/* Submit Button End */}
          </form>
          <p className="text-center my-3 text-sm font-semibold">Or</p>

          <GoogleLogin></GoogleLogin>
          {/* Form  End*/}
          <div className="flex justify-center gap-2 mt-4">
            <p>Don't have an account yet?</p>
            <Link to="/register" className="text-blue-600 font-semibold underline">
              Sign Up
            </Link>
          </div>
        </div>
        {/* Left End */}

        {/* Right */}
        <div className="w-full flex justify-center">
          <img src="images/login-illustration.svg" alt="" className="w-3/4" />
        </div>
        {/* Right End */}
      </div>
      {/* Container End */}
    </div>
  );
}

export default Login;
