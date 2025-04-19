"use client"; // Add this if you're using Next.js App Router and stateful client component

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "About", "Features", "Contact"];

  return (
    <nav className="bg-white border border-[#8c52ff] rounded-full top-0 sticky w-11/12 md:w-4/5 mx-auto mt-4 p-3 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-xl font-semibold text-[#8c52ff] font-sora">
        WishCube
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <li
            key={link}
            onClick={() => setActive(link)}
            className={`cursor-pointer transition hover:text-[#8c52ff] ${
              active === link ? "text-[#8c52ff] font-semibold" : ""
            }`}
          >
            <Link href={`#${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4 z-10">
        <Link href="/signup">
          <button className="cursor-pointer hidden md:block border-[#8c52ff] border text-[#8c52ff] hover:bg-[#8c52ff]-dark bg-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Sign Up
          </button>
        </Link>

        <Link href="/login">
          <button className="cursor-pointer hidden md:block bg-[#8c52ff] hover:bg-[#7a45e6] text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
            Log In
          </button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden text-2xl text-[#8c52ff]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <LiaTimesSolid /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-md p-4 flex flex-col gap-4 md:hidden text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
              className={`cursor-pointer transition hover:text-[#8c52ff] ${
                active === link ? "text-[#8c52ff] font-semibold" : ""
              }`}
            >
              <Link href={`#${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
          <Link href="/signup">
            <button className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white text-sm px-4 py-1.5 rounded-full transition duration-300">
              Get Started
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
