import React from 'react';
import { Shield, CheckCircle, Clock, DollarSign, AlertTriangle, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function MoneyBackGuarantee() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/10 text-green-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-green-200">
            <Shield className="h-4 w-4 mr-2" />
            100% Risk-Free Guarantee
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Success is <span className="text-green-600">Guaranteed</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're so confident in our premium link building service that we offer comprehensive protection for your investment. Here's exactly what you're covered for.
          </p>
        </div>

        {/* Main Guarantees */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              If we fail to deliver your promised links within 30 days, or if you're not completely satisfied with the quality, we'll refund 100% of your payment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                No questions asked refund policy
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Full refund processed within 5 business days
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Keep any content we've already created
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Penalty Protection</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our white-hat approach means zero risk of penalties. But if Google ever penalizes your site due to our links, we'll fix it and refund your investment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                100% editorial, organic placements only
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                Manual penalty reversal assistance
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                Full protection coverage included
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Time Guarantee</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We guarantee delivery within 7-14 days. If we're late without prior communication, you receive a 25% discount on your next order.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                Guaranteed delivery timeline
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                25% discount for late delivery
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                Daily progress updates available
              </li>
            </ul>
          </div>
        </div>

        {/* What's NOT Covered */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-orange-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Important: What's NOT Covered</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ranking Guarantees</h3>
              <p className="text-gray-600 mb-4">
                While our DR90+ links significantly improve ranking potential, we cannot guarantee specific ranking positions due to Google's complex algorithm and your competitors' activities.
              </p>
              <p className="text-sm text-gray-500">
                We focus on building authority - rankings are a natural result but depend on many factors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Guarantees</h3>
              <p className="text-gray-600 mb-4">
                Link building improves your site's authority and ranking potential, but traffic depends on keyword competition, content quality, and user behavior.
              </p>
              <p className="text-sm text-gray-500">
                Our ROI calculator shows potential - actual results may vary based on your specific situation.
              </p>
            </div>
          </div>
        </div>

        {/* How to Claim */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">How to Claim Your Guarantee</h2>
            <p className="text-blue-100 text-lg">Simple, straightforward process with no hassles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
              <p className="text-blue-100 text-sm">Email us at support@highdaLink.com with your concern within 30 days of delivery.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Review</h3>
              <p className="text-blue-100 text-sm">We'll review your case within 24 hours and work to resolve any issues.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Resolution</h3>
              <p className="text-blue-100 text-sm">Refund processed within 5 business days if we can't meet our guarantees.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Guarantee in Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7bf7042?w=150&h=150&fit=crop&crop=face" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">E-commerce Director</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We had concerns about one link placement, and the team immediately addressed it and provided a replacement link from an even better publication. Their guarantee isn't just words - they stand behind it."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">Marcus Johnson</div>
                  <div className="text-sm text-gray-600">Marketing Manager</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The delivery was delayed by a few days due to editorial calendar changes. They not only communicated proactively but also gave us the promised discount. Professional service."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Risk-Free?</h3>
            <p className="text-lg text-gray-600 mb-6">Join hundreds of brands building authority with complete peace of mind</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/get-started"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-600 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center"
              >
                Start Building Authority Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center"
              >
                Have Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoneyBackGuarantee;