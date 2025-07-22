
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ConstructionMaterials() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Construction Materials & Equipment</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Premium construction solutions from world-class manufacturers for your infrastructure and building projects
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Construction Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading construction equipment and materials sourced from certified global suppliers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Heavy%20construction%20equipment%20and%20machinery%20on%20construction%20site%2C%20excavators%20bulldozers%20cranes%20and%20dump%20trucks%2C%20professional%20construction%20fleet%2C%20organized%20construction%20equipment%20yard%20with%20clear%20blue%20sky%20background&width=600&height=400&seq=heavy-machinery&orientation=landscape"
                alt="Heavy Construction Machinery"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Construction Machinery</h3>
                <p className="text-gray-600 mb-4">
                  Premium earthmoving and construction equipment from leading global manufacturers including CAT, Komatsu, and Volvo
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hydraulic Excavators (1-80 tons capacity)</li>
                  <li>• Bulldozers & Motor Graders</li>
                  <li>• Tower Cranes & Mobile Cranes</li>
                  <li>• Articulated Dump Trucks & Wheel Loaders</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Construction%20building%20materials%20including%20steel%20beams%20concrete%20blocks%20and%20construction%20supplies%2C%20organized%20construction%20materials%20warehouse%2C%20steel%20structural%20components%20and%20building%20supplies%2C%20clean%20industrial%20storage%20facility&width=600&height=400&seq=building-materials&orientation=landscape"
                alt="Structural Building Materials"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Building Materials</h3>
                <p className="text-gray-600 mb-4">
                  High-grade structural materials meeting international standards for commercial and residential construction
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Structural Steel Beams & Reinforcement Bars</li>
                  <li>• Ready-Mix Concrete & Portland Cement</li>
                  <li>• Engineered Timber & Laminated Wood</li>
                  <li>• Thermal & Acoustic Insulation Materials</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Construction%20power%20tools%20and%20equipment%20in%20professional%20workshop%2C%20drills%20saws%20and%20construction%20tools%20organized%20display%2C%20professional%20construction%20tools%20and%20equipment%2C%20clean%20organized%20tool%20storage%20facility&width=600&height=400&seq=power-tools&orientation=landscape"
                alt="Professional Power Tools"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Power Tools</h3>
                <p className="text-gray-600 mb-4">
                  Industrial-grade power tools and equipment from renowned brands like DeWalt, Makita, and Bosch
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cordless Drills & Impact Drivers</li>
                  <li>• Circular Saws & Miter Saws</li>
                  <li>• Angle Grinders & Belt Sanders</li>
                  <li>• Air Compressors & Pneumatic Tools</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Construction%20safety%20equipment%20and%20protective%20gear%2C%20hard%20hats%20safety%20vests%20and%20construction%20safety%20supplies%2C%20professional%20construction%20safety%20equipment%20display%2C%20organized%20safety%20equipment%20storage%20facility&width=600&height=400&seq=safety-equipment&orientation=landscape"
                alt="Safety Equipment"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Equipment & PPE</h3>
                <p className="text-gray-600 mb-4">
                  OSHA-compliant safety equipment and personal protective equipment for construction site safety
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ANSI-Certified Hard Hats & Safety Helmets</li>
                  <li>• High-Visibility Safety Vests & Harnesses</li>
                  <li>• Steel-Toe Safety Boots & Cut-Resistant Gloves</li>
                  <li>• Fall Protection & Confined Space Equipment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Construction%20scaffolding%20and%20temporary%20structures%20on%20building%20site%2C%20metal%20scaffolding%20systems%20and%20construction%20support%20structures%2C%20professional%20scaffolding%20installation%2C%20organized%20construction%20support%20equipment&width=600&height=400&seq=scaffolding&orientation=landscape"
                alt="Scaffolding Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scaffolding & Formwork Systems</h3>
                <p className="text-gray-600 mb-4">
                  Engineered scaffolding systems and concrete formwork solutions for safe and efficient construction
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tube & Clamp Scaffolding Systems</li>
                  <li>• Modular System Scaffolding</li>
                  <li>• Aluminum Concrete Formwork</li>
                  <li>• Hydraulic Shoring Systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Construction%20electrical%20and%20plumbing%20equipment%2C%20electrical%20conduits%20and%20plumbing%20pipes%20and%20fittings%2C%20construction%20utility%20equipment%20display%2C%20professional%20construction%20electrical%20supplies%20storage&width=600&height=400&seq=electrical-plumbing&orientation=landscape"
                alt="MEP Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">MEP Systems & Components</h3>
                <p className="text-gray-600 mb-4">
                  Mechanical, electrical, and plumbing systems for comprehensive building infrastructure solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Electrical Conduits & Cable Management</li>
                  <li>• Copper & PEX Plumbing Systems</li>
                  <li>• Commercial Grade Fixtures & Outlets</li>
                  <li>• HVAC Ducting & Ventilation Components</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Construction Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by contractors and builders worldwide for reliable construction equipment and materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Quality Standards</h3>
              <p className="text-gray-600">
                All equipment meets ISO, CE, and local safety certifications from authorized dealers and manufacturers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Logistics Network</h3>
              <p className="text-gray-600">
                Efficient worldwide shipping and delivery solutions to keep your construction projects on schedule
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warranty & Support</h3>
              <p className="text-gray-600">
                Comprehensive warranty coverage and technical support for all construction equipment and materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Applications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipment and materials for diverse construction and infrastructure development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Construction</h3>
              <p className="text-gray-600 text-sm">Office buildings, retail centers, and mixed-use developments</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Residential Development</h3>
              <p className="text-gray-600 text-sm">Single-family homes, condominiums, and housing projects</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-roadster-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Infrastructure Projects</h3>
              <p className="text-gray-600 text-sm">Highways, bridges, airports, and public infrastructure</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-factory-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industrial Facilities</h3>
              <p className="text-gray-600 text-sm">Manufacturing plants, warehouses, and processing facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Vision?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with verified suppliers for premium construction equipment, materials, and tools at competitive prices
          </p>
          <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Request Professional Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
