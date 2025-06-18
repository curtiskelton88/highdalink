import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Is your link building service safe for my website?",
      answer: "Absolutely. We use 100% white-hat, editorial link building techniques. All our links are placed organically by verified authors on high-authority sites (DR90+/DA90+). We never use PBNs, link farms, or any black-hat methods that could risk your site's rankings."
    },
    {
      question: "What if Google penalizes my website?",
      answer: "This is extremely unlikely given our white-hat approach, but we offer full Google penalty protection. If your site receives a manual penalty that can be directly attributed to our links (which has never happened), we'll work with you to resolve it and provide a full refund."
    },
    {
      question: "How long before I see results?",
      answer: "Link delivery typically takes 7-14 days. You'll see the immediate benefit of high-authority backlinks, but ranking improvements usually appear within 4-12 weeks as Google processes the new signals. Long-term authority building shows compounding results over 3-6 months."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 30-day money-back guarantee. If we fail to deliver the promised links within the specified timeframe, or if you're not satisfied with the quality, we'll provide a full refund."
    },
    {
      question: "What makes your writers 'elite'?",
      answer: "Our writers have bylines on major publications and have worked with brands like TripAdvisor, Nike, UCLA, and Fortune 500 companies. They're native English speakers from the US/UK with proven track records in your industry."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Due to client confidentiality, we can't share specific client campaigns. However, we can provide anonymized examples during our consultation call and show you the types of publications we work with."
    },
    {
      question: "How do you ensure the links are permanent?",
      answer: "We work with established editorial teams and verified contributor accounts. The content is published as regular editorial content, not paid placement, which means it stays live as part of the publication's content strategy."
    },
    {
      question: "What reporting do I receive?",
      answer: "You'll receive a comprehensive report with live links, publication details, DA/DR metrics, and content links. Agency clients get monthly performance reports with ranking improvements and traffic impact analysis."
    },
    {
      question: "Can you target specific keywords in the articles?",
      answer: "Yes! We strategically incorporate your target keywords naturally within the content while maintaining editorial quality. We focus on contextual relevance rather than keyword stuffing."
    },
    {
      question: "Do you work with all industries?",
      answer: "We work with most industries including Technology, Healthcare, Finance, E-commerce, Real Estate, and more. We avoid adult content, gambling, and anything that violates publication guidelines."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about our premium link building services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6">Our team is here to help! Get in touch and we'll answer any questions about our link building services.</p>
          <a 
            href="mailto:support@highdaLink.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;