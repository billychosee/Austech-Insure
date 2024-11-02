import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="px-8 md:px-36 py-16 md:py-28 bg-darkGray text-white">
      <h1 className="text-3xl md:text-5xl font-extrabold pb-12 md:pb-28 text-center md:text-left">
        AUSTECH INSURE
      </h1>

      {/* Links */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/4">
          <p className="font-semibold">About us</p>
          <p className="hover:text-gray-400 transition-colors duration-200">People</p>
          <p className="hover:text-gray-400 transition-colors duration-200">Claims</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/4">
          <p className="font-semibold">General Inquiries</p>
          <p className="hover:text-gray-400 transition-colors duration-200">Mon-Fri</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/4">
          <p className="font-semibold">Broker Partner Inquiries</p>
          <p className="hover:text-gray-400 transition-colors duration-200">People</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/4">
          <p className="font-semibold">Mailing Address</p>
          <p className="hover:text-gray-400 transition-colors duration-200">(+256)753070283</p>
          <p className="hover:text-gray-400 transition-colors duration-200">Kampala, Uganda</p>
        </div>
      </div>

      {/* Socials */}
      <div className="flex justify-center md:justify-start gap-6 mt-12">
        <FaFacebookF className="text-white hover:text-blue-600 cursor-pointer transition-colors duration-200" size={24} />
        <FaTwitter className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-200" size={24} />
        <FaLinkedinIn className="text-white hover:text-blue-700 cursor-pointer transition-colors duration-200" size={24} />
        <FaInstagram className="text-white hover:text-pink-600 cursor-pointer transition-colors duration-200" size={24} />
      </div>

      {/* Copyright */}
      <p className="mt-12 text-sm text-center md:text-left text-gray-400">
        &copy; {new Date().getFullYear()} Austech Insure. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
