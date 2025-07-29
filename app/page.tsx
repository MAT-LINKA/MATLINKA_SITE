"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Modern%20industrial%20construction%20site%20with%20electrical%20panels%2C%20generators%2C%20turbines%20and%20heavy%20machinery%20in%20a%20professional%20setting%20with%20blue%20sky%20background%2C%20industrial%20equipment%20supplier%20warehouse%2C%20clean%20modern%20facility%20with%20organized%20equipment%20displays&width=1920&height=1080&seq=hero-bg&orientation=landscape)`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Connecting Clients with
              <span className="text-blue-300"> Reliable Suppliers</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your reliable solution for all your requirements, right at your
              fingertips. We bridge the gap between your needs and quality
              suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Quote Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in connecting you with verified suppliers for all
              your industrial and construction material needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Construction Equipment
              </h3>
              <p className="text-gray-600 mb-6">
                Heavy machinery, tools, and construction materials from trusted
                suppliers worldwide
              </p>
              <Link
                href="/products/construction"
                className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-flashlight-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Electrical Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Electrical panels, generators, transformers, and power
                distribution equipment
              </p>
              <Link
                href="/products/power"
                className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-drop-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Water & Pumping Systems
              </h3>
              <p className="text-gray-600 mb-6">
                Pumps, turbines, water treatment equipment, and fluid handling
                systems
              </p>
              <Link
                href="/products/water-supply"
                className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand the challenges of sourcing quality materials and
                equipment. Our network of verified suppliers ensures you get the
                best products at competitive prices.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Verified Suppliers Network
                    </h3>
                    <p className="text-gray-600">
                      All our suppliers are thoroughly vetted for quality and
                      reliability
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Fast Response Time
                    </h3>
                    <p className="text-gray-600">
                      Quick turnaround on quotes and material sourcing requests
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      Rigorous quality checks and certification processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-customer-service-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-600">
                      Personal assistance throughout the procurement process
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20in%20modern%20office%20with%20industrial%20equipment%20catalogs%20and%20supplier%20documents%20on%20table%2C%20business%20handshake%2C%20industrial%20procurement%20consultation%2C%20clean%20modern%20office%20environment%20with%20equipment%20displays&width=800&height=600&seq=why-choose-us&orientation=landscape"
                alt="Professional consultation"
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
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
            Submit your material requirements and let us connect you with the
            right suppliers. Get competitive quotes and quality assurance.
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
