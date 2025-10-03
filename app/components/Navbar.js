"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load the icons
const FaMoon = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaMoon)
);
const FaSun = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaSun)
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link href="/">PL</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`hover:text-red-500 relative ${
                  pathname === link.href
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-red-500"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              title={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-700">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`block px-4 py-2 hover:bg-gray-700 ${
                pathname === link.href ? "bg-red-500 text-white" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
