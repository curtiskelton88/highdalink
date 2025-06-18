import React from 'react';

function ClientLogos() {
  const logos = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png',
      industry: 'Technology'
    },
    {
      name: 'Goldman Sachs', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/512px-Goldman_Sachs.svg.png',
      industry: 'Finance'
    },
    {
      name: 'Johnson & Johnson',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Johnson_%26_Johnson_Logo.svg/512px-Johnson_%26_Johnson_Logo.svg.png',
      industry: 'Healthcare'
    },
    {
      name: 'Deloitte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/512px-Deloitte.svg.png',
      industry: 'Consulting'
    },
    {
      name: 'Shopify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png',
      industry: 'E-commerce'
    },
    {
      name: 'Marriott',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Marriott_Logo.svg/512px-Marriott_Logo.svg.png',
      industry: 'Hospitality'
    },
    {
      name: 'Adobe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png',
      industry: 'Technology'
    },
    {
      name: 'BMW',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/512px-BMW.svg.png',
      industry: 'Automotive'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of Fortune 500 companies, startups, and agencies who trust us with their link building campaigns
          </p>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {logos.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-16 w-32 flex items-center justify-center mb-3">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.name}
                </div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Trusted Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
              <div className="text-sm text-gray-600">Links Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">DR92</div>
              <div className="text-sm text-gray-600">Average Domain Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl text-gray-700 italic mb-6 max-w-4xl mx-auto">
            "HighDALink delivered exactly what they promised. DR90+ links from premium publications that actually moved our rankings. The quality and service exceeded our expectations."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7bf7042?w=150&h=150&fit=crop&crop=face"
              alt="Sarah Chen"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-sm text-gray-600">VP of Marketing, TechGrowth Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;