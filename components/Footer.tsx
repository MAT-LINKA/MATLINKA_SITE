"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_0.5fr_1fr] gap-8">
          <div>
            <h3 className="flex items-center text-xl font-bold mb-4 font-pacifico">
              <img
                src="/favicon.ico"
                alt="Matlinka Logo"
                className="w-6 h-6 mr-2"
              />
              MatLinka
            </h3>
            <p className="text-gray-400 text-sm">
              Your reliable link to suppliers, simplifying the way you source
              and connect.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <p className="text-gray-400 text-sm">
              We specialise in connecting clients with suppliers for their
              material needs — quickly, efficiently, and without hassle. Whether
              you need construction materials, industrial equipment, or any
              other specialised product, we source the right suppliers from our
              network based on your exact requirements and budget.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              {/* <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                <span>info@matlinka.com</span>
              </div>
              {/* <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>123 Business District, City</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-[11px] text-gray-500 border-t border-gray-800 pt-4 leading-snug">
          <p>
            *Terms and Conditions: MatLinka is an online platform that connects
            clients ("Buyers") with suppliers based on the Buyers' material
            requirements and budget. We only facilitate introductions between
            Buyers and Suppliers. We are not a party to any transaction and do
            not manufacture, sell, or purchase goods.
          </p>
          <p>
            These Terms & Conditions ("Terms") govern your use of the MatLinka
            platform available at{" "}
            <a
              href="https://www.matlinka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline hover:text-white"
            >
              www.matlinka.com
            </a>{" "}
            and related services. By using our platform, you agree to be bound
            by these Terms. If you do not agree, please do not use our services.
          </p>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Material Supply Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
