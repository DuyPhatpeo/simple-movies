import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-gray-400 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + desc */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🎬 DinoMovie</h2>
          <p className="text-sm leading-relaxed">
            Discover movies, explore casts, and watch trailers. Built with ❤️
            using TMDB API.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/movies" className="hover:text-white">
                Movies
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-white">
              📘 Facebook
            </a>
            <a href="#" className="hover:text-white">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} DinoMovie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
