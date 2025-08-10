"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner in industrial material supply chain solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between industrial
                clients and reliable suppliers, we have been serving the
                construction and industrial sectors for over a decade.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand the challenges businesses face when sourcing
                materials and equipment. That's why we've built a comprehensive
                network of suppliers who can meet diverse requirements across
                multiple industries.
              </p>
              <p className="text-lg text-gray-600">
                Our expertise spans construction equipment, electrical systems,
                water management solutions, and specialized industrial
                machinery, ensuring our clients have access to everything they
                need from a single source.
              </p>
            </div>

            <div className="relative">
              <img
                src="/team.jpg"
                alt="Our team"
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-flag-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To simplify the procurement process for industrial materials by
                connecting clients with suppliers, ensuring reliability, and
                competitive pricing for every project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To become the leading platform for industrial material
                procurement, known for our extensive supplier network,
                exceptional service, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-thumb-up-line text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Covenience
              </h3>
              <p className="text-gray-600">
                Your reliable solution for all your requirements, right at your
                fingertips. We bridge the gap between your needs and suppliers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-fill text-4xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600">
                Our clients can count on us for consistent service, timely
                responses, and strong supplier relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-4xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our processes and embrace new
                technologies to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Together with Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work hand-in-hand with our clients to achieve success and build
              lasting relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Partnership"
                className="w-full h-64 rounded-lg mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Strong Partnerships
              </h3>
              <p className="text-gray-600">
                We build close relationships with our clients to ensure projects
                run smoothly, on time, and on budget.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Collaboration"
                className="w-full h-64 rounded-lg mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaboration at Every Step
              </h3>
              <p className="text-gray-600">
                We treat every client as a partner and collaborate closely from
                concept to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers for your project
            requirements
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
