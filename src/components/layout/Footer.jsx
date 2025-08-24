import React from "react";
import {
  FaFacebookF,
  FaDiscord,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";
import logo from "@assets/logo.png";

const Footer = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Movies", url: "/movies" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-[#0b0d14] text-gray-300 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-6 relative z-10">
        {/* Logo + Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="DinoMovie Logo"
              className="w-9 h-9 object-contain"
            />
            <h2 className="text-2xl font-bold text-emerald-400">DinoMovie</h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <FaDiscord className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaXTwitter className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaFacebookF className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaTiktok className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaYoutube className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-emerald-400 transition-colors" />
            <FaTelegram className="cursor-pointer hover:text-emerald-400 transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start text-base font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Description + Copyright */}
        <div className="text-center md:text-left text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
          <p>
            DinoMovie – Your go-to platform for discovering the latest movies
            and series. High-quality streaming with subtitles and dubbing,
            anytime and anywhere.
          </p>
          <p className="mt-3 text-gray-500">
            © {new Date().getFullYear()} DinoMovie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
