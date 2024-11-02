"use client"; // Ensure this is at the top

import React, { useState } from 'react';
import './Navbar.css'; // Ensure the path is correct

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-darkGray text-white relative overflow-hidden">
      {/* Logo */}
      <div className="text-2xl font-bold transform transition-transform duration-500 hover:rotate-12 animate-bounce">
        AUSTECH INSURE
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <a href="#about" className="navbar-link">About Us</a>
        <a href="#services" className="navbar-link">Services</a>
        <a href="#claims" className="navbar-link">Claims</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <a
          href="#get-quote"
          className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          Get a Quote
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-3xl focus:outline-none transform transition-transform duration-300 hover:rotate-180"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-darkGray p-6 flex flex-col gap-4 text-lg md:hidden">
          <a href="#about" className="mobile-menu-link">About Us</a>
          <a href="#services" className="mobile-menu-link">Services</a>
          <a href="#claims" className="mobile-menu-link">Claims</a>
          <a href="#contact" className="mobile-menu-link">Contact</a>
          <a
            href="#get-quote"
            className="bg-blue-600 rounded p-2 text-center hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar; // Ensure you are using default export
