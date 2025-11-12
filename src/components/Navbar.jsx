import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="bg-linear-to-r from-amber-400 to-amber-500 text-white font-extrabold text-xl px-3 py-1 rounded-xl shadow-sm">
              Ride<span className="text-black">Now</span>
            </div>
          </div>

          {/* Right: Pages + Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Pages */}
            <div className="flex space-x-6 text-gray-800 font-medium">
              <Link to="/" className="hover:text-amber-500 transition">
                Home
              </Link>
              <Link to="/services" className="hover:text-amber-500 transition">
                Services
              </Link>
              <Link to="/features" className="hover:text-amber-500 transition">
                Features
              </Link>
              <Link to="/about" className="hover:text-amber-500 transition">
                About
              </Link>
              <Link to="/contact" className="hover:text-amber-500 transition">
                Contact
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <Link to="/login">
                <button className="px-4 py-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-600 transition shadow-sm cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-800 hover:text-amber-500 transition"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-3">
              <Link to="/login">
                <button className="px-4 py-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-600 transition cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
