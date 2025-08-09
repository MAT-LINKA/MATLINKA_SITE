"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://readdy.ai/api/search-image?query=Modern%20industrial%20warehouse%20with%20stacks%20of%20construction%20materials%2C%20solar%20panels%2C%20and%20supply%20equipment%20in%20organized%20rows%2C%20professional%20lighting%2C%20clean%20industrial%20environment%20with%20blue%20and%20gray%20tones%2C%20minimalist%20background%20with%20subtle%20textures&width=1920&height=1080&seq=hero-materials-1&orientation=landscape",
      title: "Quality Materials for Every Project",
      subtitle:
        "Your trusted partner for solar, construction, and water supply materials. Professional solutions delivered with excellence.",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=Large%20construction%20site%20with%20cranes%20and%20building%20materials%2C%20solar%20panel%20installation%20on%20rooftops%2C%20modern%20industrial%20setting%20with%20organized%20equipment%20and%20supplies%2C%20professional%20blue%20and%20gray%20color%20scheme&width=1920&height=1080&seq=hero-materials-2&orientation=landscape",
      title: "Professional Construction Solutions",
      subtitle:
        "From foundation to finish, we provide premium materials for all your construction and infrastructure needs.",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=Solar%20panel%20farm%20with%20rows%20of%20photovoltaic%20panels%20under%20blue%20sky%2C%20clean%20renewable%20energy%20installation%2C%20modern%20industrial%20landscape%20with%20organized%20solar%20equipment%20and%20mounting%20systems&width=1920&height=1080&seq=hero-materials-3&orientation=landscape",
      title: "Renewable Energy Materials",
      subtitle:
        "Leading the future with comprehensive solar solutions and sustainable energy materials for modern applications.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`,
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center"></i>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
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
                We specialize in connecting you with suppliers for all your
                industrial and construction material needs
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
                  Heavy machinery, tools, and construction materials from
                  trusted suppliers worldwide
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
                  We understand the challenges of sourcing materials and
                  equipment. Our network of suppliers ensures you get the best
                  products at competitive prices.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-start">
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
                  </div> */}

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Response Time
                      </h3>
                      <p className="text-gray-600">
                        Quick turnaround on quotes and material sourcing
                        requests
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
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
                  </div> */}

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

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-global-fill text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Global Supplier Network
                      </h3>
                      <p className="text-gray-600">
                        Our Global Supplier Network is dedicated to sourcing a
                        wide range of industrial products tailored to meet our
                        customers' specific needs.
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
              right suppliers. Get competitive quotes.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Submit Your Requirements
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
