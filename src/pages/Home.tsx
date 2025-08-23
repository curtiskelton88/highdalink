import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ChevronRight, Package, FileText, Users, Link2, Shield, DollarSign, Calculator, Star, ChevronLeft, ChevronRight as ChevronRightIcon, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ClientLogos from '../components/ClientLogos';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Marketing, TechGrowth Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c78e6e70?w=150&h=150&fit=crop&crop=face",
      quote: "HighDALink delivered exactly what they promised. DR90+ editorial backlinks from premium publications that actually moved our rankings. The quality and service exceeded our expectations.",
      results: "Increased organic traffic by 47% in 3 months"
    },
    {
      name: "Marcus Johnson",
      title: "SEO Director, Digital Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The DA90+ editorial backlinks from HighDALink transformed our domain authority. We went from struggling to rank to dominating our industry keywords within 6 months.",
      results: "Domain Authority increased from 35 to 58"
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, E-commerce Brands",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Working with HighDALink was a game-changer. Their transparent pricing and guaranteed results gave us confidence, and the DR90+ editorial backlinks delivered measurable ROI.",
      results: "ROI of 340% within first quarter"
    },
    {
      name: "David Park",
      title: "Marketing Manager, SaaS Startup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7bf7042?w=150&h=150&fit=crop&crop=face",
      quote: "The quality of DA90+ editorial backlinks is unmatched. Every link came from genuine high-authority publications, and our search rankings improved dramatically.",
      results: "Top 3 rankings for 12 target keywords"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEOHead 
        title="HighDALink - Elite DR90+ Editorial Backlinks | Top 1%"
        description="Top 1% provider of elite DR90+ editorial backlinks. Premium high authority link building services. White hat SEO, Fortune 500 trusted."
        keywords="elite backlink building services, DR90+ editorial backlinks, DA90+ editorial backlinks, top 1% link building provider, high authority link building, premium link building services, 90+ domain rating backlinks, 90+ domain authority backlinks, white hat link building, organic editorial backlinks, premium SEO services, elite SEO services, professional link building, enterprise link building, Fortune 500 link building, premium editorial links, high DR backlinks, high DA backlinks, quality link building services, expert link building, advanced SEO link building, premium domain authority links, elite editorial placements, top quality backlinks, professional SEO services, enterprise SEO solutions"
      />
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
                We help growth-focused brands and agencies dominate search rankings with DR90+ editorial backlinks and premium SEO-optimized content. Our DA90+ editorial backlinks are trusted by global brands worldwide, delivering guaranteed results that transform your search presence and drive sustainable organic growth.
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

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See What You Get</h2>
            <p className="text-xl text-gray-600">Professional client dashboard to track your campaigns</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="text-white text-sm ml-4">HighDALink Client Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                    <div className="text-blue-100 text-sm">Total Links</div>
                    <div className="text-2xl font-bold">47</div>
                    <div className="text-blue-200 text-xs">+12 this month</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
                    <div className="text-green-100 text-sm">Avg Domain Rating</div>
                    <div className="text-2xl font-bold">DR92</div>
                    <div className="text-green-200 text-xs">Premium quality</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white">
                    <div className="text-orange-100 text-sm">Active Projects</div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-orange-200 text-xs">2 in progress</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm font-medium text-gray-700 mb-3">Recent Links Delivered</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">techcrunch.com</div>
                        <div className="text-sm text-gray-600">Future of SaaS Technology</div>
                      </div>
                      <div className="text-blue-600 font-semibold">DR94</div>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">entrepreneur.com</div>
                        <div className="text-sm text-gray-600">Startup Growth Strategies</div>
                      </div>
                      <div className="text-blue-600 font-semibold">DR91</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Elite Link Building Service</h2>
            <p className="text-xl text-gray-600">Premium features that set us apart from the competition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% White Hat</h3>
              <p className="text-gray-600 leading-relaxed">
                Only organic editorial placements from verified writers. No PBNs, no paid placements, no penalties - guaranteed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DR90+ Only</h3>
              <p className="text-gray-600 leading-relaxed">
                Every backlink comes from premium publications with Domain Rating 90+ for maximum SEO impact and authority transfer.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Elite Writers</h3>
              <p className="text-gray-600 leading-relaxed">
                Native US & UK writers with bylines on major publications. Previously worked with Nike, TripAdvisor, and Fortune 500 companies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Results</h3>
              <p className="text-gray-600 leading-relaxed">
                30-day money-back guarantee, Google penalty protection, and delivery within 7-14 days or get a discount.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Package className="h-4 w-4 mr-2" />
              Our Proven Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our DR90+ Editorial Backlinks Work</h2>
            <p className="text-xl text-gray-600 mb-6">Get premium DA90+ editorial backlinks in 4 simple steps with transparent pricing</p>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our proven link building process has helped thousands of websites achieve top search rankings through high-authority editorial placements. 
                Unlike traditional link building services, we focus exclusively on DR90+ editorial backlinks that provide lasting SEO value and 
                comply with Google's quality guidelines.
              </p>
              <p>
                Each DA90+ editorial backlink is secured through genuine relationships with verified writers and editors at premium publications. 
                This approach ensures your links remain permanent, valuable, and completely safe from Google penalties while delivering 
                measurable improvements to your domain authority and search rankings.
              </p>
            </div>
          </div>

          {/* Process Steps with Enhanced Effects */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
              <div className="flex justify-between items-center px-32">
                <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-orange-500 to-green-500"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-green-500 to-purple-500"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">Step 1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Choose Your Package</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Select from our Elite One, Authority Pro, or Agency Monthly packages with transparent pricing designed for every budget and goal.
              </p>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-blue-600 text-sm font-medium">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Starting at $600
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">Step 2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Submit Requirements</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Fill out our simple form with your URL, target keywords, and specific requirements. Our team reviews everything within 24 hours.
              </p>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-orange-600 text-sm font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  24hr Response
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">Step 3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Elite Writers Work</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our vetted US & UK native writers create premium content and secure DR90+ editorial backlinks through established editorial relationships.
              </p>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-green-600 text-sm font-medium">
                  <Award className="h-4 w-4 mr-1" />
                  Elite Quality
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Link2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-sm font-bold px-4 py-2 rounded-full shadow-sm">Step 4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Receive Live Links</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get your DA90+ editorial backlinks delivered within 7-14 days with comprehensive reporting and guaranteed results.
              </p>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-purple-600 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  7-14 Days
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Enhanced Value Proposition */}
          <div className="mt-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative text-center">
              <h3 className="text-3xl font-bold mb-6">Why This Process Works So Well</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Shield className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3">100% Safe & Compliant</h4>
                  <p className="text-blue-100 text-sm">Every DR90+ editorial backlink follows Google's guidelines with zero risk of penalties.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Award className="h-8 w-8 text-green-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Proven Track Record</h4>
                  <p className="text-blue-100 text-sm">Over 15,000 successful DA90+ editorial backlinks delivered to Fortune 500 companies.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <TrendingUp className="h-8 w-8 text-orange-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3">Measurable Results</h4>
                  <p className="text-blue-100 text-sm">Average 47% increase in organic traffic within 3 months of campaign completion.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/get-started"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center"
                >
                  Start Your Campaign Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/why-choose-us"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center"
                >
                  Learn More About Our Process
                </Link>
              </div>
            </div>
          </div>

          {/* Social Proof Numbers */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
              <p className="text-gray-600">Join thousands of successful campaigns</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-sm text-gray-600">DR90+ Links Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">DR92</div>
                <div className="text-sm text-gray-600">Average Domain Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Sliding Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from businesses that chose our DR90+ editorial backlinks</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 min-h-[400px] flex items-center">
              <div className="w-full">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full border-4 border-blue-100 shadow-lg"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="mb-4">
                      <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].title}</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-800 mb-1">Results Achieved:</div>
                      <div className="text-green-700">{testimonials[currentTestimonial].results}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Quick answers to help you get started with confidence</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your backlinks safe from Google penalties?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. We use 100% white-hat, organic editorial placements from verified writers on DR90+ publications. 
                  No PBNs, no paid placements, no link schemes. Plus, we offer full Google penalty protection with every campaign.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly will I see results?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Links are typically delivered within 7-14 days. You'll see immediate authority benefits, but ranking improvements 
                  usually appear within 4-12 weeks as Google processes the new signals. Long-term growth compounds over 3-6 months.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your writers "elite"?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our writers are native US/UK professionals with verified bylines on major publications. They've worked with brands 
                  like TripAdvisor, Nike, UCLA, and Fortune 500 companies, ensuring your content meets the highest editorial standards.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you guarantee the links will be permanent?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. Our links are placed as genuine editorial content by established writers, not as paid advertisements. 
                  This means they remain permanent as part of the publication's content strategy, providing lasting SEO value.
                </p>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Start building authority with our DR90+ editorial backlinks and see measurable results in your search rankings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/get-started"
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/roi-calculator"
                  className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Your ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;