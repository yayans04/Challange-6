import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("password tidak sama");
    } else {
      try {
        let data = JSON.stringify({
          email,
          password,
          name: `${firstName} ${lastName}`,
        });

        let config = {
          method: "post",
          url: `https://km4-challenge-5-api.up.railway.app/api/v1/auth/register`,
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
    }
  };

  return (
    <div>
      {/* Container */}
      <div className="grid grid-cols-2 h-[100vh] font-quicksand">
        {/* Left */}
        <div className="w-full flex justify-center">
          <img src="images/register-illustration.svg" alt="" className="w-3/4" />
        </div>
        {/* Left End */}

        {/* Right */}
        <div className="flex flex-col justify-center w-full px-28 bg-white text-black border">
          <div className="flex flex-col gap-3 items-center">
            <img src="icons/binar_icon.png" alt="" width="50px" />
            <h1 className="font-bold text-4xl">Create Account</h1>
          </div>
          {/* Form */}
          <form action="" className="flex flex-col mt-8 gap-3">
            <div className="flex gap-3">
              {/* First Name Input */}
              <div className="relative w-full flex items-center">
                <img src="/icons/person_icon.svg" alt="" className="absolute w-[20px] left-3" />
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full bg-gray-200 border border-gray-200 pl-10 py-[10px] pr-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-[#7A187D] invalid:focus:border-red-600"
                />
              </div>
              {/* First Name Input End */}

              {/* Last Name Input */}
              <div className="relative w-full flex items-center">
                <img src="/icons/person_icon.svg" alt="" className="absolute w-[20px] left-3" />
                <input
                  type="text"
                  name="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full bg-gray-200 border border-gray-200 pl-10 py-[10px] pr-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-[#7A187D] invalid:focus:border-red-600"
                />
              </div>
              {/* Last Name Input End */}
            </div>

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

            {/* Password Confirm Input */}
            <div className="relative w-full flex items-center">
              <img src="/icons/password_icon.svg" alt="" className="absolute w-[20px] left-3" />
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password Confirmation"
                className="w-full bg-gray-200 border border-gray-200 pl-10 py-[10px] pr-[15px] rounded-[5px] outline-none transition duration-200 placeholder:text-[#263238] placeholder:text-base placeholder:font-medium placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-[#7A187D] invalid:focus:border-red-600"
              />
            </div>
            {/* Password Confirm Input End */}

            {/* Submit Button */}
            <button type="submit" onClick={handleSubmit} className="w-full bg-[#121a1f] py-3 rounded-[5px] text-white hover:bg-[#1f2c35] active:scale-95 transition">
              Sign Up
            </button>
            {/* Submit Button End */}
          </form>

          <p className="text-center my-3 text-sm font-semibold">Or</p>

          <GoogleLogin></GoogleLogin>
          {/* Form  End*/}
          <div className="flex justify-center gap-2 mt-4">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-600 font-semibold underline">
              Sign In
            </Link>
          </div>
        </div>
        {/* Right End */}
      </div>
      {/* Container End */}
    </div>
  );
}

export default Register;
