
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SolarMaterials() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Solar & Renewable Energy Systems</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Comprehensive renewable energy solutions from tier-1 manufacturers for sustainable power generation
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Energy Solutions Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading renewable energy equipment and electrical systems from certified global manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Solar%20panels%20array%20installation%20on%20industrial%20building%20rooftop%2C%20high-quality%20photovoltaic%20panels%20in%20organized%20rows%2C%20blue%20crystalline%20solar%20cells%2C%20clean%20industrial%20background%2C%20professional%20solar%20installation&width=600&height=400&seq=solar-panels&orientation=landscape"
                alt="Photovoltaic Solar Panels"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Photovoltaic Solar Panels</h3>
                <p className="text-gray-600 mb-4">
                  Tier-1 solar modules from leading manufacturers including Jinko, Trina, and Canadian Solar with 25-year warranties
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monocrystalline Panels (18-23% efficiency)</li>
                  <li>• Polycrystalline Panels (15-18% efficiency)</li>
                  <li>• Bifacial Solar Modules</li>
                  <li>• PERC & Half-Cell Technology</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Solar%20inverter%20systems%20and%20electrical%20control%20panels%20in%20professional%20installation%2C%20modern%20solar%20inverters%20with%20digital%20displays%2C%20electrical%20safety%20equipment%2C%20clean%20industrial%20electrical%20room%20setup&width=600&height=400&seq=solar-inverters&orientation=landscape"
                alt="Solar Inverter Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Inverter Systems</h3>
                <p className="text-gray-600 mb-4">
                  Advanced DC-to-AC conversion systems from SMA, Fronius, and Huawei with grid-tie and off-grid capabilities
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• String Inverters (5kW-100kW)</li>
                  <li>• Power Optimizers & Microinverters</li>
                  <li>• Central Inverters (100kW-3MW)</li>
                  <li>• Hybrid Storage-Ready Systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Electrical%20panels%20and%20distribution%20boards%20in%20industrial%20setting%2C%20modern%20electrical%20control%20panels%20with%20switches%20and%20meters%2C%20professional%20electrical%20installation%2C%20clean%20industrial%20electrical%20equipment&width=600&height=400&seq=electrical-panels&orientation=landscape"
                alt="Electrical Distribution Panels"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Distribution Panels</h3>
                <p className="text-gray-600 mb-4">
                  UL-listed electrical panels and switchgear from Schneider Electric, ABB, and Siemens for safe power distribution
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Main Distribution Boards (MDB)</li>
                  <li>• Sub-Distribution Boards (SDB)</li>
                  <li>• Motor Control Centers (MCC)</li>
                  <li>• Custom Control Panel Solutions</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Industrial%20generators%20and%20backup%20power%20systems%20in%20professional%20setting%2C%20diesel%20generators%20and%20electrical%20power%20equipment%2C%20industrial%20power%20generation%20facility%2C%20clean%20organized%20power%20equipment%20installation&width=600&height=400&seq=generators&orientation=landscape"
                alt="Industrial Generator Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Generator Systems</h3>
                <p className="text-gray-600 mb-4">
                  Prime and standby generators from Caterpillar, Cummins, and Perkins for reliable backup power solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Diesel Generators (10kW-2MW)</li>
                  <li>• Natural Gas Generators</li>
                  <li>• Hybrid Solar-Diesel Systems</li>
                  <li>• Automatic Transfer Switch (ATS)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Wind%20turbines%20and%20renewable%20energy%20equipment%20in%20clean%20industrial%20setting%2C%20modern%20wind%20turbine%20components%20and%20electrical%20systems%2C%20professional%20renewable%20energy%20installation%2C%20organized%20energy%20equipment%20display&width=600&height=400&seq=turbines&orientation=landscape"
                alt="Wind Turbine Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wind Turbine Systems</h3>
                <p className="text-gray-600 mb-4">
                  Horizontal and vertical axis wind turbines from GE, Vestas, and Goldwind for commercial wind energy projects
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Small Wind Turbines (1-50kW)</li>
                  <li>• Commercial Wind Turbines (100kW-3MW)</li>
                  <li>• Hydro Turbines (Francis, Pelton, Kaplan)</li>
                  <li>• Complete Tower & Foundation Systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Wind%20energy%20systems%20and%20wind%20turbines%20in%20professional%20installation%2C%20modern%20wind%20power%20equipment%20and%20wind%20farm%20technology%2C%20clean%20wind%20energy%20facility%2C%20organized%20wind%20power%20equipment%20display&width=600&height=400&seq=wind-energy&orientation=landscape"
                alt="Wind Energy Solutions"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wind Energy Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Complete wind energy systems including control systems, power conditioning, and grid integration solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wind Farm Management Systems</li>
                  <li>• SCADA & Remote Monitoring</li>
                  <li>• Power Quality & Grid Compliance</li>
                  <li>• Meteorological Monitoring Equipment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Solar%20mounting%20systems%20and%20electrical%20accessories%20in%20professional%20warehouse%2C%20aluminum%20mounting%20rails%20and%20electrical%20connectors%2C%20organized%20solar%20installation%20components%2C%20clean%20industrial%20equipment%20storage&width=600&height=400&seq=accessories&orientation=landscape"
                alt="Solar Mounting & Accessories"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Mounting & Accessories</h3>
                <p className="text-gray-600 mb-4">
                  Engineered mounting systems and electrical accessories from Schletter, Unirac, and other certified manufacturers
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Roof & Ground Mount Systems</li>
                  <li>• Solar Tracking Systems</li>
                  <li>• MC4 Connectors & DC Cables</li>
                  <li>• Energy Storage & Battery Systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Industrial%20water%20pumps%20and%20pumping%20systems%20in%20professional%20facility%2C%20centrifugal%20pumps%20submersible%20pumps%20and%20water%20treatment%20equipment%2C%20organized%20pump%20equipment%20display%2C%20clean%20industrial%20water%20facility&width=600&height=400&seq=water-pumps-solar&orientation=landscape"
                alt="Solar Water Pumping Systems"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solar Water Pumping Systems</h3>
                <p className="text-gray-600 mb-4">
                  Solar-powered water pumping solutions from Grundfos, Lorentz, and Franklin Electric for irrigation and water supply
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Solar Submersible Pumps</li>
                  <li>• Solar Surface Pumps</li>
                  <li>• MPPT Pump Controllers</li>
                  <li>• Complete Irrigation Systems</li>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Renewable Energy Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by energy professionals worldwide for sustainable and reliable power generation systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Certifications</h3>
              <p className="text-gray-600">
                All products certified to IEC, UL, TUV, and CE standards with comprehensive manufacturer warranties
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tier-1 Manufacturers</h3>
              <p className="text-gray-600">
                Direct partnerships with leading manufacturers from Germany, USA, China, and other technology leaders
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engineering Support</h3>
              <p className="text-gray-600">
                Complete technical support for system design, installation guidance, and commissioning services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Applications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Renewable energy solutions serving diverse sectors and applications worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Residential Systems</h3>
              <p className="text-gray-600 text-sm">Rooftop solar and home energy storage solutions</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial & Industrial</h3>
              <p className="text-gray-600 text-sm">Large-scale renewable energy installations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-factory-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Utility Scale</h3>
              <p className="text-gray-600 text-sm">MW-scale solar and wind power projects</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-roadster-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Off-Grid Solutions</h3>
              <p className="text-gray-600 text-sm">Remote power and telecommunications systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Connect with verified suppliers for premium solar, wind, and renewable energy solutions at competitive prices
          </p>
          <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Request Professional Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
