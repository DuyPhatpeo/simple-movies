import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdHome, MdMovie, MdInfo, MdContactMail } from "react-icons/md";
import logo from "@assets/logo.png"; // thêm logo nếu muốn dùng hình

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-5 relative overflow-hidden w-full">
      {/* Gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 py-12 relative z-10">
        {/* Logo + Desc */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="DinoMovie Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-3xl font-bold text-emerald-400 flex items-center gap-1">
              DinoMovie
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover movies, explore casts, and watch trailers. Built with ❤️
            using TMDB API.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MdHome /> <a href="/">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MdMovie /> <a href="/movies">Movies</a>
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MdInfo /> <a href="/about">About</a>
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <MdContactMail /> <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-500 border-t border-white/10 py-5 relative z-10">
        © {new Date().getFullYear()} DinoMovie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
