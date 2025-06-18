import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Shield, MessageSquare, BarChart3, Zap, ChevronRight, X, Check, Ban, Eye, Heart, Award } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-orange-400/30">
            <Award className="h-4 w-4 mr-2" />
            Top 1% of Link Building Providers Worldwide
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Why We're the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Clear Choice</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            We don't just build links—we build authority that transforms your search presence with premium editorial placements
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-3xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">DR90+/DA90+ Only</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't settle for average. Every link we build comes from a domain with exceptional authority and trust—delivering maximum SEO impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-100 rounded-3xl p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Elite Writers</h3>
              <p className="text-gray-600 leading-relaxed">
                Our content is created by writers who've worked with TripAdvisor, Nike, UCLA, and Fortune 500 companies—ensuring your brand stands out.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-3xl p-8 hover:border-green-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">No Paid Placement</h3>
              <p className="text-gray-600 leading-relaxed">
                100% organic editorial links submitted under verified author profiles. No spam, no shortcuts, no penalties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100 rounded-3xl p-8 hover:border-purple-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Slack-First Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct access to our team via Slack. You're never left guessing about your campaign progress or results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-indigo-50 border-2 border-indigo-100 rounded-3xl p-8 hover:border-indigo-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Agency-Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                White-label support, monthly reporting, and content calendars built for scaling SEO at enterprise level.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-red-50 border-2 border-red-100 rounded-3xl p-8 hover:border-red-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by global brands worldwide with measurable improvements in search rankings and organic traffic growth.
              </p>
            </div>
          </div>

          {/* Why We Don't Buy Link Placement Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm text-red-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-red-400/30">
                  <Ban className="h-4 w-4 mr-2" />
                  Our Ethical Approach
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Why We Don't Buy Link Placements</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  While others cut corners with paid placements, we build genuine editorial relationships that last
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Google Can Detect Paid Links</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Paid link schemes are easily identified by Google's algorithms, leading to penalties and ranking drops. Our editorial approach is undetectable and safe.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Authentic Editorial Relationships</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We work directly with editors and verified contributors who genuinely believe in featuring quality content, not paid promotions.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Long-Term Link Stability</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Paid links often get removed when publications clean up their link profiles. Our editorial links remain permanent because they add real value.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Higher Authority Value</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Editorial links from high-authority domains pass more trust and ranking power than paid placements on the same sites.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Real Audience Engagement</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our content gets genuine reader engagement because it's published as valuable editorial content, not obvious advertising.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Sustainable Growth</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Building authentic editorial relationships creates sustainable, long-term growth rather than short-term gains that risk penalties.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold text-white mb-4">The HighDALink Difference</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every link we secure is earned through quality content and genuine editorial merit. We never pay for placements, sponsor posts, or use link schemes. 
                    This ethical approach ensures your website builds lasting authority that Google rewards, not punishes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Compare</h2>
              <p className="text-xl text-gray-600">See why we're the clear choice for premium link building</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-xl">HighDALink</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">uSERP.io</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Authority Builders</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">HARO Links</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Domain Rating</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        DR90+
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">DR60+</td>
                    <td className="text-center py-4 px-6 text-gray-600">DR70+</td>
                    <td className="text-center py-4 px-6 text-gray-600">Varies</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Editorial Placement</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        100%
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">Mix</td>
                    <td className="text-center py-4 px-6 text-gray-600">80%</td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Writer Quality</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        Elite US/UK
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">Professional</td>
                    <td className="text-center py-4 px-6 text-gray-600">Good</td>
                    <td className="text-center py-4 px-6 text-gray-600">Basic</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Delivery Time</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        7-14 days
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">21-30 days</td>
                    <td className="text-center py-4 px-6 text-gray-600">14-21 days</td>
                    <td className="text-center py-4 px-6 text-gray-600">30+ days</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Money Back Guarantee</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        30 days
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">14 days</td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Penalty Protection</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="inline-flex items-center text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        <Check className="h-4 w-4 mr-1" />
                        Full Coverage
                      </span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">Starting Price</td>
                    <td className="text-center py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
                      <span className="text-blue-600 font-bold text-lg">$600</span>
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">$700</td>
                    <td className="text-center py-4 px-6 text-gray-600">$500</td>
                    <td className="text-center py-4 px-6 text-gray-600">$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-12 mb-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h3>
              <p className="text-lg text-gray-600 mb-8">Join the top 1% with our premium link building services</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/get-started"
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-orange-600 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center text-lg shadow-xl"
                >
                  Start Building Authority Today
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center text-lg"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;