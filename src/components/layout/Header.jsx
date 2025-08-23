import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo.png"; // thay đường dẫn đúng

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DinoMovie Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold">
            <span className="text-emerald-500">Dino</span>
            <span className="text-white">Movie</span>
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="flex items-center gap-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 transition-colors ${
                isActive
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`
            }
          >
            Home
            {/* underline effect */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `relative pb-1 transition-colors ${
                isActive
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`
            }
          >
            Movies
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 transition-colors ${
                isActive
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`
            }
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
