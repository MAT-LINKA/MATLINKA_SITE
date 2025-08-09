"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ConstructionMaterials() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Equipment for Mining, Rigging, and Construction
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Professional heavy equipment and machinery solutions for mining
            operations, rigging projects, and construction sites{" "}
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Heavy Equipment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading mining, rigging, and construction equipment from
              certified global manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Heavy%20mining%20equipment%20including%20excavators%20bulldozers%20and%20dump%20trucks%20at%20mining%20site%2C%20professional%20mining%20machinery%20fleet%2C%20organized%20mining%20equipment%20with%20yellow%20and%20orange%20machinery%2C%20clear%20industrial%20mining%20operation%20background&width=600&height=400&seq=mining-equipment&orientation=landscape"
                alt="Mining Equipment"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mining Equipment
                </h3>
                <p className="text-gray-600">
                  Heavy-duty excavators, bulldozers, dump trucks, and
                  specialized mining machinery for efficient extraction
                  operations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Industrial%20rigging%20equipment%20including%20cranes%20hoists%20and%20lifting%20gear%2C%20professional%20rigging%20machinery%20and%20lifting%20systems%2C%20organized%20rigging%20equipment%20yard%20with%20cranes%20and%20lifting%20devices%2C%20construction%20site%20rigging%20operations&width=600&height=400&seq=rigging-equipment&orientation=landscape"
                alt="Rigging Equipment"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Rigging Equipment
                </h3>
                <p className="text-gray-600">
                  Professional cranes, hoists, lifting gear, and rigging
                  hardware for safe and efficient heavy lifting operations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Construction%20machinery%20including%20excavators%20loaders%20and%20construction%20equipment%20on%20building%20site%2C%20professional%20construction%20fleet%20with%20yellow%20machinery%2C%20organized%20construction%20equipment%20yard%20with%20building%20materials%2C%20active%20construction%20site%20background&width=600&height=400&seq=construction-machinery&orientation=landscape"
                alt="Construction Machinery"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Construction Machinery
                </h3>
                <p className="text-gray-600">
                  Complete range of construction equipment including loaders,
                  graders, compactors, and earthmoving machinery
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Drilling%20equipment%20and%20boring%20machines%20for%20mining%20and%20construction%2C%20professional%20drilling%20rigs%20and%20earth%20drilling%20machinery%2C%20organized%20drilling%20equipment%20fleet%2C%20industrial%20drilling%20operations%20with%20clear%20background&width=600&height=400&seq=drilling-equipment&orientation=landscape"
                alt="Drilling Equipment"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Drilling Equipment
                </h3>
                <p className="text-gray-600">
                  Advanced drilling rigs, boring machines, and specialized
                  drilling equipment for mining and foundation work
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Material%20handling%20equipment%20including%20forklifts%20conveyor%20systems%20and%20loading%20machinery%2C%20professional%20warehouse%20and%20construction%20material%20handling%20equipment%2C%20organized%20material%20handling%20fleet%20with%20yellow%20and%20orange%20machinery&width=600&height=400&seq=material-handling&orientation=landscape"
                alt="Material Handling"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Material Handling
                </h3>
                <p className="text-gray-600">
                  Forklifts, conveyor systems, loading equipment, and material
                  handling solutions for efficient operations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Specialized%20construction%20and%20mining%20tools%20including%20jackhammers%20power%20tools%20and%20heavy%20equipment%20attachments%2C%20professional%20construction%20tool%20collection%2C%20organized%20industrial%20tools%20and%20equipment%20display&width=600&height=400&seq=specialized-tools&orientation=landscape"
                alt="Specialized Tools"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Specialized Tools & Attachments
                </h3>
                <p className="text-gray-600">
                  Professional-grade attachments, specialized tools, and
                  equipment accessories for enhanced productivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Construction Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted heavy equipment solutions with comprehensive support and
              proven reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certified Equipment
              </h3>
              <p className="text-gray-600">
                All machinery meets international safety standards with full
                certifications and manufacturer warranties
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-fill text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Maintenance
              </h3>
              <p className="text-gray-600">
                Professional maintenance and repair services by certified
                technicians with genuine parts availability
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock technical support and emergency service for all
                equipment and machinery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipment and materials for diverse construction and
              infrastructure development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Office buildings, retail centers, and mixed-use developments
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Residential Development
              </h3>
              <p className="text-gray-600 text-sm">
                Single-family homes, condominiums, and housing projects
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-roadster-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Infrastructure Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Highways, bridges, airports, and public infrastructure
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-2-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Industrial Facilities
              </h3>
              <p className="text-gray-600 text-sm">
                Manufacturing plants, warehouses, and processing facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with suppliers for premium construction equipment,
            materials, and tools at competitive prices
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Professional Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
