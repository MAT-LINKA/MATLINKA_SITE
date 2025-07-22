"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 font-pacifico"
          >
            MatLinka
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Products
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/products/solar"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Solar Materials
                </Link>
                <Link
                  href="/products/construction"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Construction Materials
                </Link>
                <Link
                  href="/products/water-supply"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Water Supply Materials
                </Link>
                <Link
                  href="/products/pharmaceutical"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Pharmaceutical Reactors
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/products/solar"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Solar Materials
              </Link>
              <Link
                href="/products/construction"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Construction Materials
              </Link>
              <Link
                href="/products/water-supply"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Water Supply Materials
              </Link>
              <Link
                href="/products/pharmaceutical"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Pharmaceutical Reactors
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
