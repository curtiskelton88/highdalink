import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ChevronRight, Package, FileText, Users, Link2, Shield, DollarSign, Calculator, Star } from 'lucide-react';
import ClientLogos from '../components/ClientLogos';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Top 1% Link Building Provider
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                High Authority. <span className="text-orange-400">Real Results.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We help growth-focused brands and agencies dominate search rankings with DR90+/DA90+ editorial backlinks and SEO-optimized content. Trusted by global brands, powered by elite writers.
              </p>
              
              {/* Guarantees in Hero */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm font-medium">Penalty Protected</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm font-medium">30-Day Guarantee</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/get-started"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold flex items-center justify-center"
                >
                  Start Building Authority
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/roi-calculator"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all font-semibold text-center flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate ROI
                </Link>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link to="/guarantee" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Money-Back Guarantee
                </Link>
                <Link to="/why-choose-us" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Why Choose Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">DR90+</div>
                    <div className="text-sm text-blue-100">Domain Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">DA90+</div>
                    <div className="text-sm text-blue-100">Domain Authority</div>
                  </div>
                  <div className="text-center col-span-2">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-blue-100">Organic Editorial Links</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works - Easy Steps</h2>
            <p className="text-xl text-gray-600">Get premium backlinks in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">Step 1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Choose Your Package</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Select from our Elite One, Authority Pro, Enterprise Max, or Agency Monthly packages based on your needs.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-orange-100 text-orange-800 text-sm font-bold px-3 py-1 rounded-full">Step 2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Submit Requirements</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Fill out our form with your URL, target keywords, and specific requirements.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">Step 3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Elite Writers Work</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our vetted US & UK native writers create premium content and secure placements.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Link2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">Step 4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Receive Live Links</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get your 90+ DA/DR backlinks delivered within 7-14 days with full reporting.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Building Authority?</h3>
              <p className="text-lg text-gray-600 mb-6">Join hundreds of brands that trust us with their link building campaigns</p>
              
              {/* Additional Guarantees */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Shield className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">100% Safe Links</div>
                  <div className="text-xs text-gray-600">White-hat editorial only</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Money Back</div>
                  <div className="text-xs text-gray-600">30-day guarantee</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Award className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Penalty Protection</div>
                  <div className="text-xs text-gray-600">Full coverage included</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/get-started"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-10 py-4 rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center text-lg shadow-lg"
              >
                Get Started Today
                <ChevronRight className="ml-2 h-6 w-6" />
              </Link>
              <Link 
                to="/roi-calculator"
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center text-lg"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Moved to after Ready to Start Building Authority */}
      <ClientLogos />
    </>
  );
}

export default Home;