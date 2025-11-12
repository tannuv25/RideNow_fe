import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4">RideNow</h2>
          <p className="text-gray-400">
            Your trusted ride partner — fast, reliable, and affordable.  
            Move smart with RideNow every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
            <li><a href="#features" className="hover:text-amber-400 transition">Features</a></li>
            <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400 mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <MapPin className="text-amber-400 w-5 h-5" />
              <span>New Delhi, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-amber-400 w-5 h-5" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-amber-400 w-5 h-5" />
              <span>support@ridenow.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-amber-400 mb-3">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-amber-400 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} RideNow. All rights reserved.
      </div>
    </footer>
  );
}
