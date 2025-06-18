import React from 'react';
import { Link } from 'react-router-dom';
import { Link2, Star, Shield, Award, CheckCircle2 } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Section */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Shield className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Award className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-sm font-medium">Top 1% Provider</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <CheckCircle2 className="h-6 w-6 text-orange-400 mr-2" />
              <span className="text-sm font-medium">Google Safe</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Link2 className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">HighDALink</span>
            </div>
            <p className="text-gray-400 mb-4">
              High Authority. Real Results. We help growth-focused brands dominate search rankings with premium editorial backlinks.
            </p>
            <div className="flex space-x-4 mb-6">
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-400 ml-2">Top 1% Provider</span>
            </div>
            
            {/* Guarantees Section */}
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-green-400 mb-2">Our Guarantees</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• 30-day money-back guarantee</li>
                <li>• 100% Google penalty protection</li>
                <li>• Links delivered within 14 days</li>
                <li>• White-hat editorial links only</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/why-choose-us" className="hover:text-white transition-colors">DR90+ Link Building</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">SEO Content Writing</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Agency Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Monthly Campaigns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/get-started" className="hover:text-white transition-colors">Get Started</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4">
">
          <p>&copy; {currentYear} HighDALink. All rights reserved. Top 1% of link building providers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
