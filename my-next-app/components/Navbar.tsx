"use client"; // Ensure this is at the top

import React, { useState } from 'react';
import './Navbar.css'; // Include any custom CSS if needed

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">AUSTECH INSURE</div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex gap-8 text-lg text-gray-700">
        <a href="#about" className="hover:text-blue-600 transition">About Us</a>
        <a href="#services" className="hover:text-blue-600 transition">Services</a>
        <a href="#claims" className="hover:text-blue-600 transition">Claims</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-3xl text-gray-800 focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
          <a href="#claims" className="text-gray-700 hover:text-blue-600 transition">Claims</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <a
            href="#get-quote"
            className="bg-blue-600 text-white rounded py-2 text-center hover:bg-blue-700 transition"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar; // Ensure you are using default export
