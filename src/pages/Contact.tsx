import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Users } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our premium link building services? Our team is here to help you build authority and dominate search rankings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Let's Start Building Your Authority</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Ready to join the top 1% of websites with DR90+ editorial backlinks? Our team of link building experts is standing by to discuss your SEO goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-200">support@highdaLink.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-500/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-green-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Slack Support</div>
                    <div className="text-blue-200">Direct team access for clients</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-orange-500/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-orange-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-blue-200">Within 24 hours guaranteed</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-500/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Team</div>
                    <div className="text-blue-200">Elite US & UK writers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Brands Trust Us</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">DR90+</div>
                  <div className="text-sm text-gray-600">Domain Rating</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Editorial Links</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">7-14</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">30 Day</div>
                  <div className="text-sm text-gray-600">Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Agency Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    required
                    value={formData.inquiry_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="pricing">Pricing Questions</option>
                    <option value="services">Service Details</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Customer Support</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your project, goals, or any specific questions you have about our link building services..."
                ></textarea>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>What happens next?</strong> Our team will review your inquiry and respond within 24 hours with a detailed answer to your questions or a personalized proposal for your link building needs.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-8 rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center shadow-lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to help you get started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly do you respond?</h3>
              <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours, often much sooner during business hours.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-600 text-sm">Yes! We provide free strategy consultations to discuss your SEO goals and recommend the best approach.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Can you work with my budget?</h3>
              <p className="text-gray-600 text-sm">We offer packages starting at $600 and can create custom solutions to fit your budget and goals.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">What industries do you serve?</h3>
              <p className="text-gray-600 text-sm">We work with most industries including Technology, Healthcare, Finance, E-commerce, and more.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Do you guarantee results?</h3>
              <p className="text-gray-600 text-sm">We offer a 30-day money-back guarantee and full Google penalty protection for peace of mind.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">How do you ensure link quality?</h3>
              <p className="text-gray-600 text-sm">All our links come from DR90+/DA90+ domains through 100% editorial placements by verified writers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;