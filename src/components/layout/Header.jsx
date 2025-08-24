import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo.png"; // thay đường dẫn đúng

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="DinoMovie Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold">
            <span className="text-emerald-500">Dino</span>
            <span className="text-white">Movie</span>
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="flex items-center gap-x-6 sm:gap-x-8 text-lg font-medium">
          {["Home", "Movies", "About"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-emerald-400"
                  } group`
                }
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
