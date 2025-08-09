"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PharmaceuticalReactors() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Pharmaceutical Reactor Systems
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            GMP-compliant pharmaceutical manufacturing equipment and reactor
            systems from leading global suppliers
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pharmaceutical Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FDA and GMP-compliant pharmaceutical processing equipment from
              certified manufacturers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20reactor%20systems%20in%20clean%20room%20environment%2C%20stainless%20steel%20pharmaceutical%20reactors%20and%20processing%20equipment%2C%20sterile%20pharmaceutical%20manufacturing%20facility%2C%20professional%20pharmaceutical%20equipment%20display&width=600&height=400&seq=pharma-reactors&orientation=landscape"
                alt="Pharmaceutical Reactor Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pharmaceutical Reactor Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  High-grade 316L stainless steel reactors from Pfaudler, De
                  Dietrich, and Büchi for API synthesis and chemical processing
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Jacketed Batch Reactors (10L-20,000L)</li>
                  <li>• Continuous Flow Reactors</li>
                  <li>• Glass-Lined Steel Reactors</li>
                  <li>• High-Pressure Autoclaves</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20mixing%20and%20agitation%20systems%2C%20industrial%20mixing%20equipment%20for%20pharmaceutical%20production%2C%20stainless%20steel%20mixers%20and%20agitators%2C%20clean%20pharmaceutical%20processing%20equipment&width=600&height=400&seq=mixing-systems&orientation=landscape"
                alt="Mixing & Agitation Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mixing & Agitation Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Precision mixing technology from Silverson, IKA, and Ekato for
                  pharmaceutical formulation and processing
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Magnetic Drive Agitators</li>
                  <li>• High-Shear Mixers</li>
                  <li>• Planetary Mixers</li>
                  <li>• Inline Homogenizers</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20filtration%20and%20separation%20equipment%2C%20sterile%20filtration%20systems%20for%20pharmaceutical%20manufacturing%2C%20clean%20filtration%20equipment%20in%20pharmaceutical%20facility%2C%20professional%20separation%20systems&width=600&height=400&seq=filtration-systems&orientation=landscape"
                alt="Filtration & Separation Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Filtration & Separation Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Sterile filtration systems from Pall, Millipore, and Sartorius
                  for pharmaceutical grade separation processes
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sterile Filtration Systems</li>
                  <li>• Tangential Flow Filtration (TFF)</li>
                  <li>• Pharmaceutical Centrifuges</li>
                  <li>• Crystallization Equipment</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20drying%20and%20crystallization%20equipment%2C%20pharmaceutical%20drying%20systems%20and%20crystallizers%2C%20sterile%20drying%20equipment%20for%20pharmaceutical%20manufacturing%2C%20clean%20pharmaceutical%20processing%20systems&width=600&height=400&seq=drying-systems&orientation=landscape"
                alt="Drying & Crystallization Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Drying & Crystallization Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced drying technology from GEA, Buchi, and Hosokawa for
                  pharmaceutical solid processing applications
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vacuum Tray Dryers</li>
                  <li>• Spray Drying Systems</li>
                  <li>• Freeze Drying Equipment</li>
                  <li>• Forced Circulation Crystallizers</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20control%20and%20automation%20systems%2C%20pharmaceutical%20process%20control%20equipment%20and%20monitoring%20systems%2C%20clean%20pharmaceutical%20automation%20facility%2C%20professional%20process%20control%20systems&width=600&height=400&seq=control-systems&orientation=landscape"
                alt="Process Control & Automation"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Process Control & Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  21 CFR Part 11 compliant control systems from Siemens,
                  Rockwell, and Schneider for pharmaceutical manufacturing
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Distributed Control Systems (DCS)</li>
                  <li>• Manufacturing Execution Systems (MES)</li>
                  <li>• Batch Control Systems</li>
                  <li>• Data Integrity & Audit Trail Systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Pharmaceutical%20heat%20exchangers%20and%20temperature%20control%20systems%2C%20pharmaceutical%20heating%20and%20cooling%20equipment%2C%20sterile%20heat%20transfer%20systems%2C%20clean%20pharmaceutical%20thermal%20processing%20equipment&width=600&height=400&seq=heat-systems&orientation=landscape"
                alt="Heat Transfer Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Heat Transfer Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Precise temperature control systems from Julabo, Huber, and
                  Lauda for pharmaceutical thermal processing
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Jacketed Reaction Vessels</li>
                  <li>• Plate Heat Exchangers</li>
                  <li>• Cryogenic Cooling Systems</li>
                  <li>• Temperature Control Units</li>
                </ul>
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
              Why Choose Our Pharmaceutical Equipment?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by pharmaceutical manufacturers worldwide for
              GMP-compliant processing equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                FDA, EMA, and GMP-compliant equipment with complete
                documentation and validation support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-microscope-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Precision Engineering
              </h3>
              <p className="text-gray-600">
                Ultra-high precision equipment designed for consistent
                pharmaceutical production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Validation Services
              </h3>
              <p className="text-gray-600">
                Comprehensive IQ/OQ/PQ validation services and ongoing technical
                support for pharmaceutical applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pharmaceutical equipment serving critical manufacturing processes
              across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-capsule-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                API Manufacturing
              </h3>
              <p className="text-gray-600 text-sm">
                Active pharmaceutical ingredient synthesis and processing
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flask-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fine Chemicals
              </h3>
              <p className="text-gray-600 text-sm">
                Specialty chemical and pharmaceutical intermediate production
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-test-tube-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                R&D Laboratories
              </h3>
              <p className="text-gray-600 text-sm">
                Research and development scale reactor systems
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Biotechnology
              </h3>
              <p className="text-gray-600 text-sm">
                Biopharmaceutical production and fermentation systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Manufacturing Capabilities?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect with suppliers for GMP-compliant pharmaceutical reactors and
            processing equipment
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Professional Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
