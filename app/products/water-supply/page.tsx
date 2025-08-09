"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WaterSupplyMaterials() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Water Supply & Fluid Management Systems
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive water infrastructure solutions from leading
            manufacturers for municipal, industrial, and agricultural
            applications
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Water Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading water supply equipment and fluid handling systems
              from certified global manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Industrial%20water%20pumps%20and%20pumping%20systems%20in%20professional%20facility%2C%20centrifugal%20pumps%20submersible%20pumps%20and%20water%20treatment%20equipment%2C%20organized%20pump%20equipment%20display%2C%20clean%20industrial%20water%20facility&width=600&height=400&seq=water-pumps&orientation=landscape"
                alt="Industrial Water Pumps"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial Water Pumps
                </h3>
                <p className="text-gray-600 mb-4">
                  High-efficiency pumps from Grundfos, Xylem, and KSB for water
                  supply, irrigation, and fluid transfer applications
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Centrifugal Pumps (50-50,000 GPM)</li>
                  <li>• Submersible Pumps (Deep Well & Sewage)</li>
                  <li>• Multistage Booster Pumps</li>
                  <li>• Fire Protection Pump Systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Industrial%20gate%20valves%20and%20water%20control%20valves%20in%20professional%20facility%2C%20various%20sizes%20of%20gate%20valves%20butterfly%20valves%20and%20control%20valves%2C%20organized%20valve%20equipment%20display%2C%20clean%20industrial%20valve%20storage&width=600&height=400&seq=gate-valves&orientation=landscape"
                alt="Industrial Gate Valves"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial Gate Valves
                </h3>
                <p className="text-gray-600 mb-4">
                  AWWA-compliant gate valves from AVK, American Flow Control,
                  and Mueller for water distribution systems
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resilient Seated Gate Valves (2"-48")</li>
                  <li>• Metal Seated Gate Valves</li>
                  <li>• Butterfly Valves & Check Valves</li>
                  <li>• Pneumatic & Electric Actuators</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Water%20treatment%20equipment%20and%20filtration%20systems%2C%20industrial%20water%20treatment%20facility%20with%20filtration%20tanks%20and%20purification%20systems%2C%20professional%20water%20treatment%20plant%2C%20clean%20water%20processing%20equipment&width=600&height=400&seq=water-treatment&orientation=landscape"
                alt="Water Treatment Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Water Treatment Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced water treatment solutions from Pentair, Evoqua, and
                  Veolia for potable water production and wastewater treatment
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reverse Osmosis Systems</li>
                  <li>• Ultrafiltration & Microfiltration</li>
                  <li>• UV Disinfection Systems</li>
                  <li>• Chemical Feed & Dosing Systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Hydro%20turbines%20and%20water%20power%20generation%20equipment%2C%20water%20turbine%20systems%20and%20hydroelectric%20generators%2C%20professional%20hydro%20power%20equipment%2C%20clean%20water%20power%20facility&width=600&height=400&seq=hydro-turbines&orientation=landscape"
                alt="Hydro Turbine Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hydro Turbine Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Hydroelectric turbines and generators from Andritz, Voith, and
                  GE for renewable energy generation projects
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pelton Wheel Turbines (High Head)</li>
                  <li>• Francis Turbines (Medium Head)</li>
                  <li>• Kaplan Turbines (Low Head)</li>
                  <li>• Micro Hydro Power Systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Industrial%20generators%20and%20backup%20power%20systems%20in%20professional%20setting%2C%20diesel%20generators%20and%20electrical%20power%20equipment%2C%20industrial%20power%20generation%20facility%2C%20clean%20organized%20power%20equipment%20installation&width=600&height=400&seq=generators-water&orientation=landscape"
                alt="Power Generation Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Power Generation Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Reliable generators from Caterpillar, Cummins, and Kohler for
                  water treatment facilities and pumping stations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Diesel Generators (20kW-3MW)</li>
                  <li>• Natural Gas Generators</li>
                  <li>• Hydro Electric Generators</li>
                  <li>• Emergency Backup Systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Water%20storage%20tanks%20and%20pressure%20vessels%2C%20industrial%20water%20storage%20systems%20and%20pressure%20tanks%2C%20professional%20water%20storage%20facility%2C%20clean%20water%20storage%20equipment&width=600&height=400&seq=water-storage&orientation=landscape"
                alt="Water Storage Solutions"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Water Storage Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Engineered storage systems from Caldwell, CB&I, and Tank
                  Connection for municipal and industrial water storage
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Stainless Steel Storage Tanks</li>
                  <li>• Fiberglass Reinforced Plastic (FRP) Tanks</li>
                  <li>• Elevated Water Towers</li>
                  <li>• Ground Storage Reservoirs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Irrigation%20systems%20and%20agricultural%20water%20equipment%2C%20drip%20irrigation%20systems%20and%20sprinkler%20equipment%2C%20professional%20agricultural%20irrigation%20display%2C%20clean%20irrigation%20equipment%20facility&width=600&height=400&seq=irrigation-systems&orientation=landscape"
                alt="Irrigation Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Irrigation Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Precision irrigation solutions from Netafim, Rain Bird, and
                  Toro for agricultural and landscape applications
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Drip Irrigation Systems</li>
                  <li>• Center Pivot Irrigation</li>
                  <li>• Sprinkler Systems</li>
                  <li>• Fertigation & Chemigation Equipment</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://readdy.ai/api/search-image?query=Water%20pipes%20and%20plumbing%20fittings%2C%20industrial%20water%20distribution%20pipes%20and%20valve%20systems%2C%20professional%20plumbing%20equipment%20display%2C%20clean%20water%20distribution%20equipment&width=600&height=400&seq=pipes-fittings&orientation=landscape"
                alt="Piping & Distribution Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Piping & Distribution Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  AWWA-standard piping systems from JM Eagle, North American
                  Pipe, and American Cast Iron for water distribution
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ductile Iron Pipe (DIP)</li>
                  <li>• High-Density Polyethylene (HDPE)</li>
                  <li>• PVC & C-PVC Pressure Pipe</li>
                  <li>• Pipe Fittings & Accessories</li>
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
              Why Choose Our Water Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by water utilities and engineering professionals worldwide
              for reliable water management systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-drop-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Water Efficiency Standards
              </h3>
              <p className="text-gray-600">
                All systems designed for optimal water usage efficiency and
                conservation compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Environmental Compliance
              </h3>
              <p className="text-gray-600">
                EPA and international environmental standards compliance for
                sustainable water management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Comprehensive engineering support and system integration
                services for complex water projects
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
              Market Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Water management solutions serving critical infrastructure and
              industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Municipal Water Systems
              </h3>
              <p className="text-gray-600 text-sm">
                City water treatment and distribution infrastructure
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-plant-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Agricultural Irrigation
              </h3>
              <p className="text-gray-600 text-sm">
                Precision irrigation and crop water management
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-factory-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Industrial Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Process water and cooling system solutions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flashlight-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Hydroelectric Power
              </h3>
              <p className="text-gray-600 text-sm">
                Renewable energy generation systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Water Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with suppliers for premium water pumps, turbines, valves,
            and treatment systems at competitive prices
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Professional Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
