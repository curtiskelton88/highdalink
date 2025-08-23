import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PayPalButton from '../components/PayPalButton';
import { useAuth } from '../App';
import { trackFormSubmission, trackPackageSelection } from '../utils/analytics';

function GetStarted() {
  const [showPayment, setShowPayment] = useState(false);
  const { createClientAccount } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if user came from pricing page with pre-selected package
  const locationState = location.state as { selectedPackage?: string; fromPricing?: boolean } | null;
  const preSelectedPackage = locationState?.selectedPackage || 'Authority Pro';
  const fromPricing = locationState?.fromPricing || false;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    targetUrl: '',
    keywords: '',
    category: '',
    package: preSelectedPackage,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Track form submission
    trackFormSubmission('get_started_form', true);
    trackPackageSelection(formData.package, formData.package.includes('600') ? '$600' : formData.package.includes('1100') ? '$1100' : '$2000');
    
    alert('Thank you for your order! We will contact you within 24 hours.');
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.targetUrl && formData.keywords && formData.category) {
      setShowPayment(true);
    } else {
      alert('Please fill in all required fields before proceeding to payment.');
    }
  };

  const getPackageAmount = () => {
    switch (formData.package) {
      case 'Elite One': return '600';
      case 'Authority Pro': return '1100';
      case 'Agency Monthly': return '2000';
      default: return '600';
    }
  };

  const getPackageDescription = () => {
    switch (formData.package) {
      case 'Elite One': return '1 DR90+ backlink with 1500-word SEO article';
      case 'Authority Pro': return '2 DR90+ backlinks with premium SEO articles and spam audit';
      case 'Agency Monthly': return '4 DR90+ backlinks monthly with Slack support and reporting';
      default: return '1 DR90+ backlink with 1500-word SEO article';
    }
  };

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    
    // Simulate sending login credentials via email
    const loginCredentials = {
      email: formData.email,
      password: generateSecurePassword(),
      loginUrl: window.location.origin + '/login'
    };
    
    // In a real application, this would trigger an email service
    console.log('Sending login credentials to:', loginCredentials);
    
    // Create client account automatically
    const newUser = createClientAccount({
      name: formData.name,
      email: formData.email,
      company: formData.company
    });
    
    // Show success message
    alert(`Payment successful! Transaction ID: ${details.id}\n\nWelcome to HighDALink! Your account has been created.\n\n🔐 IMPORTANT: Login credentials have been sent to ${formData.email}\n\nPlease check your email for secure login instructions.\n\nOur team will contact you within 24 hours to begin your ${formData.package} campaign.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      targetUrl: '',
      keywords: '',
      category: '',
      package: 'Authority Pro',
      message: ''
    });
    setShowPayment(false);
    
    // Redirect to client dashboard
    navigate('/dashboard/client');
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment failed:', error);
    alert('Payment failed. Please try again or contact our support team.');
  };

  const generateSecurePassword = () => {
    // Generate a secure random password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  return (
    <>
      <SEOHead 
        title="Get Started - Order Elite DR90+ Editorial Backlinks"
        description="Start your elite link building campaign today. Order premium DR90+ editorial backlinks from top 1% provider. Elite writers, guaranteed results."
        keywords="order elite backlinks, get started link building, DR90+ editorial backlinks order, DA90+ editorial backlinks order, elite backlink building services, premium link building service order, top 1% link building provider, high authority backlinks order, 90+ domain rating backlinks order, 90+ domain authority backlinks order, professional link building campaign, enterprise link building order, premium SEO services order, quality link building services order"
      />
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h1>
          <div className="space-y-2">
            <p className="text-xl text-gray-600">
              {showPayment ? 'Complete your payment to start your link building campaign' : 'Fill out the form below and proceed to payment or request a quote'}
            </p>
            {fromPricing && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-blue-800 text-sm">
                  <strong>✓ Package Selected:</strong> {preSelectedPackage} - Complete the form below to proceed with your order
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h2>
            <form onSubmit={showPayment ? handleSubmit : handleProceedToPayment} className="space-y-6">
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
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Package *
                </label>
                <select
                  id="package"
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="Elite One">💎 Elite One - $600</option>
                  <option value="Authority Pro">🚀 Authority Pro - $1,100</option>
                  <option value="Agency Monthly">⚡ Agency Monthly - $2,000/month</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="targetUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Target URL *
              </label>
              <input
                type="url"
                id="targetUrl"
                name="targetUrl"
                required
                value={formData.targetUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="https://example.com/target-page"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Keywords *
                </label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  required
                  value={formData.keywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="SEO services, link building, etc."
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry/Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Education">Education</option>
                  <option value="Travel">Travel</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Tell us about your goals, current challenges, or any specific requirements..."
              ></textarea>
            </div>

              {!showPayment && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Next Steps:</strong> {fromPricing ? 'Complete your project details and proceed to secure payment.' : 'Complete the form and choose to either pay now to start immediately, or request a quote for custom requirements.'}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {!showPayment ? (
                  <>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-8 rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center"
                    >
                      Proceed to Payment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className={`w-full py-3 rounded-lg transition-all font-semibold flex items-center justify-center ${
                        fromPricing 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      disabled={fromPricing}
                    >
                      {fromPricing ? 'Quote Option Disabled' : 'Request Quote Instead'}
                    </button>
                    {fromPricing && (
                      <p className="text-xs text-gray-500 text-center">
                        Package already selected from pricing page
                      </p>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPayment(false)}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all font-semibold"
                  >
                    ← Back to Edit Details
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Payment Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {showPayment ? 'Complete Payment' : `${fromPricing ? 'Selected' : 'Current'} Package`}
            </h2>
            
            {/* Package Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{formData.package}</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm">{getPackageDescription()}</p>
                    {fromPricing && (
                      <p className="text-blue-600 text-xs font-medium">✓ Selected from pricing page</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">${getPackageAmount()}</div>
                  {formData.package === 'Agency Monthly' && (
                    <div className="text-sm text-gray-600">/month</div>
                  )}
                </div>
              </div>
              
              {formData.targetUrl && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="text-sm text-gray-600 mb-2">Project Details:</div>
                  <div className="space-y-1 text-sm">
                    <div><strong>Target URL:</strong> {formData.targetUrl}</div>
                    <div><strong>Keywords:</strong> {formData.keywords}</div>
                    <div><strong>Industry:</strong> {formData.category}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Section */}
            {showPayment ? (
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pay with PayPal</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Secure payment processing. You'll receive a confirmation email and our team will contact you within 24 hours.
                  </p>
                </div>
                
                <div className="min-h-[120px]">
                  <PayPalButton
                    amount={getPackageAmount()}
                    packageName={formData.package}
                    description={getPackageDescription()}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Secure payment powered by PayPal. Your information is protected.
                  </p>
                  <div className="mt-2">
                    <button
                      type="button"
                      onClick={() => setShowPayment(false)}
                      className="text-sm text-blue-600 hover:text-blue-700 underline"
                    >
                      ← Back to form
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  {fromPricing ? 'Complete your project details to proceed with secure payment.' : 'Complete the form on the left to proceed with payment or request a custom quote.'}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-green-800">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-xs text-green-700">
                    Full refund if we don't deliver as promised
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default GetStarted;