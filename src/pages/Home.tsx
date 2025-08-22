import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ChevronRight, Package, FileText, Users, Link2, Shield, DollarSign, Calculator, Star, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
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
        title="HighDALink - Premium DR90+ Editorial Backlinks | High Authority Link Building"
        description="Get premium DR90+/DA90+ editorial backlinks from top publications. Elite writers, organic placement, guaranteed results. Trusted by Fortune 500 companies worldwide."
        keywords="DR90+ backlinks, DA90+ editorial backlinks, high authority link building, premium SEO services, editorial link building, organic backlinks, white hat SEO, link building services"
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                Select from our Elite One, Authority Pro, or Agency Monthly packages with transparent pricing designed for every budget and goal.
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
                Our vetted US & UK native writers create premium content and secure DR90+ editorial backlinks through established editorial relationships.
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
                Get your DA90+ editorial backlinks delivered within 7-14 days with comprehensive reporting and guaranteed results.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our DR90+ Editorial Backlinks?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join hundreds of brands that trust us with their link building campaigns. Our transparent pricing and guaranteed results 
                make us the preferred choice for businesses serious about SEO success.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted by Global Brands</h3>
                  <p className="text-gray-600 text-sm">
                    Fortune 500 companies and leading agencies choose our DA90+ editorial backlinks for their proven track record 
                    of delivering sustainable SEO results and improving search rankings.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Guaranteed Results</h3>
                  <p className="text-gray-600 text-sm">
                    Every DR90+ editorial backlink comes with our 30-day money-back guarantee and full Google penalty protection. 
                    We stand behind our work with measurable results you can trust.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees or surprise costs. Our transparent pricing structure ensures you know exactly what you're getting 
                    with each DA90+ editorial backlink package we deliver.
                  </p>
                </div>
              </div>
              
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
                to="/pricing"
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all font-semibold inline-flex items-center justify-center text-lg"
              >
                View Transparent Pricing
              </Link>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Learn more about our approach and see why we're different:
              </p>
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