"use client";

import { useState } from "react";
import Link from "next/link";
import { CiMail, CiUser } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsPhone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    console.log("Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Signup successful!");
  };

  return (
    <div className="bg-center w-full flex items-center justify-center mx-auto h-screen bg-no-repeat bg-cover">
      <div className="bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-lg border border-[#8c52ff] p-6 flex flex-col text-center items-center md:w-1/3 w-full gap-6 m-4 md:m-0">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-ubuntu font-medium">
            Create an Account
          </h2>
          <p className="text-sm font-pop">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#8c52ff] cursor-pointer">Log In</span>
            </Link>
          </p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col w-full gap-4">
          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <CiUser className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-transparent placeholder:text-gray-500 font-pop text-sm w-full outline-none"
            />
          </div>

          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <CiMail className="w-4 h-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent placeholder:text-gray-500 font-pop text-sm w-full outline-none"
            />
          </div>

          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <BsPhone className="w-4 h-4 text-gray-500" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
              className="bg-transparent placeholder:text-gray-500 font-pop text-sm w-full outline-none"
            />
          </div>

          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <MdOutlinePassword className="w-4 h-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent placeholder:text-gray-500 font-pop text-sm w-full outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-pop">{error}</p>}

          <button
            type="submit"
            className="bg-[#8c52ff] p-2 text-white font-pop rounded-md hover:bg-[#8c52ff]-dark active:scale-95 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="w-full flex items-center gap-4">
          <hr className="flex-grow border-t border-text" />
          <span className="text-text font-pop text-sm">or</span>
          <hr className="flex-grow border-t border-text" />
        </div>

        <div className="flex gap-6">
          <div className="border-2 border-[#8c52ff] p-2 rounded-md hover:bg-[#8c52ff] cursor-pointer">
            <BsApple className="h-6 w-6" />
          </div>
          <div className="border-2 border-[#8c52ff] p-2 rounded-md hover:bg-[#8c52ff] cursor-pointer">
            <FcGoogle className="h-6 w-6" />
          </div>
          <div className="border-2 border-[#8c52ff] p-2 rounded-md hover:bg-[#8c52ff] cursor-pointer">
            <FaXTwitter className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
