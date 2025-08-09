"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive solutions for all your industrial material procurement
            needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions for your procurement needs
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* card1 */}
              <div className="bg-gray-50 rounded-xl p-8 w-full ">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-search-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Supplier Sourcing
                </h3>
                <p className="text-gray-600mb-6">
                  We identify and connect you with potential suppliers from our
                  global network who can meet your specific requirements for
                  industrial needs. Our team will source suppliers that match
                  your specifications, providing you with a list of potential
                  options to consider. This service gives you access to a vast
                  network of suppliers, streamlining your search and saving you
                  time.
                </p>
              </div>

              {/* card2 */}
              <div className="bg-gray-50 rounded-xl p-8 w-full ">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-file-list-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quote Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Get competitive quotes from multiple suppliers and compare
                  pricing, delivery terms, and specifications to make informed
                  decisions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Multiple quote comparison
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Detailed specifications
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Transparent pricing
                  </li>
                </ul>
              </div>

              {/* card3 */}
              {/* <div className="bg-gray-50 rounded-xl p-8 w-full ">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 mb-6">
                  Our rigorous quality control processes ensure that all
                  materials and equipment meet industry standards and your
                  specific requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Thorough material Sourcing
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Industry-standard Compliance
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2"></i>
                    Detailed product information
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, efficient steps to connect you with the right suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Submit Requirements
              </h3>
              <p className="text-gray-600">
                Tell us about your material needs, specifications, and budget
                through our detailed form
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Supplier Matching
              </h3>
              <p className="text-gray-600">
                We identify and verify suppliers from our network who can meet
                your specific requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quote Comparison
              </h3>
              <p className="text-gray-600">
                Receive and compare multiple quotes with detailed specifications
                and pricing
              </p>
            </div>

            {/* <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Support</h3>
              <p className="text-gray-600">
                Ongoing support throughout the procurement process until successful delivery
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by professionals across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Construction</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-3-fill text-3xl text-green-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Manufacturing</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flashlight-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Energy & Power</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-drop-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="font-semibold text-gray-900">Water Treatment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers for your material
            requirements
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Submit Your Requirements
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
