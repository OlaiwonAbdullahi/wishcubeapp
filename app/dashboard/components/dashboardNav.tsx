"use client";

import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const DashboardNavbar = () => {
  return (
    <header className="flex z-40 justify-between w-11/12 mx-auto items-center sticky top-0 shadow-sm p-3 m-2.5 rounded-full shadow-[#8c52ff]/15 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm ">
      <h1 className="text-2xl text-black font-semibold">
        wishcube
        <sup className="bg-[#8c52ff] text-white px-1 rounded-full text-xs ml-1">
          beta
        </sup>
      </h1>

      <nav className="flex gap-1.5">
        <button
          aria-label="Notifications"
          className="border border-[#8c52ff]/45 p-1 rounded-full"
        >
          <BsBell className="w-5 h-5 text-[#8c52ff]" />
        </button>
        <button
          aria-label="User Profile"
          className="border border-[#8c52ff]/45 p-1 rounded-full"
        >
          <CiUser className="w-5 h-5 text-[#8c52ff]" />
        </button>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
