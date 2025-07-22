
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between industrial clients and reliable suppliers, we have been serving the construction and industrial sectors for over a decade.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand the challenges businesses face when sourcing quality materials and equipment. That's why we've built a comprehensive network of verified suppliers who can meet diverse requirements across multiple industries.
              </p>
              <p className="text-lg text-gray-600">
                Our expertise spans construction equipment, electrical systems, water management solutions, and specialized industrial machinery, ensuring our clients have access to everything they need from a single trusted source.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20team%20in%20modern%20industrial%20office%20with%20construction%20equipment%20catalogs%20and%20supplier%20network%20displays%2C%20business%20professionals%20reviewing%20industrial%20projects%2C%20clean%20modern%20office%20environment%20with%20equipment%20samples&width=800&height=600&seq=our-story&orientation=landscape"
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
                <i className="ri-target-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To simplify the procurement process for industrial materials by connecting clients with verified suppliers, ensuring quality, reliability, and competitive pricing for every project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become the leading platform for industrial material procurement, known for our extensive supplier network, exceptional service, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain rigorous quality standards and work only with suppliers who meet our certification requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-handshake-line text-4xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Our clients can count on us for consistent service, timely delivery, and dependable supplier relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-4xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our processes and embrace new technologies to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20in%20formal%20suit%2C%20confident%20business%20leader%20portrait%2C%20industrial%20sector%20professional%2C%20clean%20studio%20background%2C%20business%20headshot%20photography&width=400&height=400&seq=team-member-1&orientation=squarish"
                alt="John Smith"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
              <p className="text-blue-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                15+ years in industrial procurement and supply chain management
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20woman%20in%20corporate%20attire%2C%20experienced%20business%20manager%20portrait%2C%20industrial%20sector%20professional%2C%20clean%20studio%20background%2C%20business%20headshot%20photography&width=400&height=400&seq=team-member-2&orientation=squarish"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 font-semibold mb-4">Head of Supplier Relations</p>
              <p className="text-gray-600">
                Expert in supplier verification and quality assurance processes
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20engineer%20in%20formal%20attire%2C%20technical%20specialist%20portrait%2C%20industrial%20equipment%20expert%2C%20clean%20studio%20background%2C%20business%20headshot%20photography&width=400&height=400&seq=team-member-3&orientation=squarish"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-blue-600 font-semibold mb-4">Technical Specialist</p>
              <p className="text-gray-600">
                Specialized in electrical systems and construction equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers for your project requirements
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
