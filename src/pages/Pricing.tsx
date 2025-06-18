import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star } from 'lucide-react';

function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Packages</h1>
          <p className="text-xl text-gray-600">Choose the perfect package for your authority building needs</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Elite One */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-center mb-8">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Elite One</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$600</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">1 DR90+/DA90+ backlink</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">1500-word SEO article by an elite writer</span>
              </li>
            </ul>
            <Link 
              to="/get-started"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold block text-center shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Authority Pro */}
          <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 relative transform scale-105 hover:scale-110 hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Authority Pro</h3>
              <div className="text-4xl font-bold text-orange-600 mb-4">$1,100</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">2 DR90+/DA90+ backlinks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Two 2000-word SEO articles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Spam audit report</span>
              </li>
            </ul>
            <Link 
              to="/get-started"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-semibold block text-center shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Max */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-center mb-8">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Enterprise Max</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$1,500</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">3 DR90+/DA90+ backlinks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Three 2500-word SEO articles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Content strategy insights</span>
              </li>
            </ul>
            <Link 
              to="/get-started"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold block text-center shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Agency Monthly */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
            <div className="text-center mb-8">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-200 transition-colors">Agency Monthly</h3>
              <div className="text-4xl font-bold mb-4">$2,000<span className="text-lg">/month</span></div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>4 DR90+/DA90+ backlinks monthly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>Slack support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>Content calendar</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>Monthly performance reporting</span>
              </li>
            </ul>
            <Link 
              to="/get-started"
              className="w-full bg-white text-purple-900 py-3 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105 font-semibold block text-center shadow-lg"
            >
              Start Monthly Plan
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-lg text-gray-600">Contact us for enterprise pricing and custom packages tailored to your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;