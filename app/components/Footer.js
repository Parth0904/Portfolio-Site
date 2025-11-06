import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        {/* Logo / Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          PL
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/about" className="hover:text-red-500">About</Link>
          <Link href="/projects" className="hover:text-red-500">Projects</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Parth0904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="hover:text-red-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-londhe-057207343/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="hover:text-red-500"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/Parth811758"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my X (Twitter) profile"
            className="hover:text-red-500"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Parth Londhe. All rights reserved.
      </div>
    </footer>
  );
}
