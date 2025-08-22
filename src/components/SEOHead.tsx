import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

function SEOHead({ 
  title = "HighDALink - Elite DR90+ DA90+ Editorial Backlinks | Top 1% Link Building Services",
  description = "Top 1% provider of elite DR90+ DA90+ editorial backlinks. Premium high authority link building services, white hat SEO, organic backlinks from 90+ domain rating sites. Trusted by Fortune 500 companies.",
  keywords = "DR90+ editorial backlinks, DA90+ editorial backlinks, elite backlink building services, high authority link building, premium link building services, top 1% link building provider, 90+ domain rating backlinks, 90+ domain authority backlinks, white hat link building, organic editorial backlinks, premium SEO services, high quality backlinks, authority link building, editorial link placement, top tier backlinks, elite SEO services, professional link building, enterprise link building, Fortune 500 link building, premium editorial links, high DR backlinks, high DA backlinks, quality link building services, expert link building, advanced SEO link building, premium domain authority links, elite editorial placements, top quality backlinks, professional SEO services, enterprise SEO solutions",
  ogImage = "/og-image.jpg"
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = `https://curtiskelton88-highd-jpim.bolt.host${location.pathname}`;

  // Enhanced schema markup for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HighDALink",
    "alternateName": "High DA Link",
    "description": "Top 1% provider of elite DR90+ DA90+ editorial backlinks and premium high authority link building services",
    "url": "https://curtiskelton88-highd-jpim.bolt.host",
    "logo": "https://curtiskelton88-highd-jpim.bolt.host/logo.png",
    "foundingDate": "2020",
    "slogan": "Elite DR90+ Editorial Backlinks - Top 1% Link Building Provider",
    "knowsAbout": [
      "DR90+ Editorial Backlinks",
      "DA90+ Editorial Backlinks", 
      "Elite Backlink Building Services",
      "High Authority Link Building",
      "Premium Link Building Services",
      "White Hat SEO",
      "Organic Editorial Backlinks",
      "Premium SEO Services",
      "Enterprise Link Building",
      "Professional SEO Services"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "support@highdaLink.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/highdaLink",
      "https://linkedin.com/company/highdaLink"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "award": "Top 1% Link Building Provider Worldwide"
  };

  // Enhanced service schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Elite DR90+ DA90+ Editorial Backlink Building Services",
    "description": "Premium high authority editorial backlinks from 90+ domain rating and domain authority sites. Top 1% provider of elite link building services with white hat SEO strategies.",
    "provider": {
      "@type": "Organization",
      "name": "HighDALink",
      "description": "Top 1% provider of elite backlink building services"
    },
    "serviceType": [
      "DR90+ Editorial Backlinks",
      "DA90+ Editorial Backlinks", 
      "Elite Link Building Services",
      "High Authority Link Building",
      "Premium SEO Services",
      "White Hat Link Building",
      "Organic Editorial Backlinks",
      "Professional Link Building",
      "Enterprise Link Building Solutions"
    ],
    "category": [
      "SEO Services",
      "Digital Marketing",
      "Link Building",
      "Content Marketing",
      "Search Engine Optimization"
    ],
    "areaServed": "Worldwide",
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "Fortune 500 Companies",
        "Digital Marketing Agencies", 
        "E-commerce Businesses",
        "SaaS Companies",
        "Enterprise Businesses",
        "Professional Services"
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elite Link Building Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite One Package - DR90+ Editorial Backlinks",
            "description": "1 DR90+ editorial backlink with 1500-word SEO article by elite writer"
          },
          "price": "600",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Authority Pro Package - DA90+ Editorial Backlinks",
            "description": "2 DR90+ DA90+ editorial backlinks with premium SEO articles and spam audit"
          },
          "price": "1100",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agency Monthly Package - Elite Link Building Services",
            "description": "4 DR90+ editorial backlinks monthly with Slack support and performance reporting"
          },
          "price": "2000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "600",
      "highPrice": "2000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  // FAQ Schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are DR90+ editorial backlinks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DR90+ editorial backlinks are high-quality links from websites with Domain Rating of 90 or higher, placed organically within editorial content by verified writers and editors."
        }
      },
      {
        "@type": "Question", 
        "name": "Why choose HighDALink for elite link building services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HighDALink is a top 1% provider of elite backlink building services, specializing in DR90+ DA90+ editorial backlinks with 100% white hat methods, premium writers, and guaranteed results."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get DR90+ backlinks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our elite link building services typically deliver DR90+ DA90+ editorial backlinks within 7-14 days, with full reporting and live link verification."
        }
      }
    ]
  };

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', currentUrl);
      document.head.appendChild(canonical);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'HighDALink - Elite DR90+ DA90+ Editorial Backlinks' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', tag.content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        ogTag.setAttribute('content', tag.content);
        document.head.appendChild(ogTag);
      }
    });

    // Add Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@highdaLink' },
      { name: 'twitter:creator', content: '@highdaLink' }
    ];

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', tag.content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        twitterTag.setAttribute('content', tag.content);
        document.head.appendChild(twitterTag);
      }
    });

    // Add JSON-LD schema markup
    let organizationScript = document.querySelector('#organization-schema');
    if (organizationScript) {
      organizationScript.textContent = JSON.stringify(organizationSchema);
    } else {
      organizationScript = document.createElement('script');
      organizationScript.id = 'organization-schema';
      organizationScript.type = 'application/ld+json';
      organizationScript.textContent = JSON.stringify(organizationSchema);
      document.head.appendChild(organizationScript);
    }

    let serviceScript = document.querySelector('#service-schema');
    if (serviceScript) {
      serviceScript.textContent = JSON.stringify(serviceSchema);
    } else {
      serviceScript = document.createElement('script');
      serviceScript.id = 'service-schema';
      serviceScript.type = 'application/ld+json';
      serviceScript.textContent = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);
    }

    let faqScript = document.querySelector('#faq-schema');
    if (faqScript) {
      faqScript.textContent = JSON.stringify(faqSchema);
    } else {
      faqScript = document.createElement('script');
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    // Cleanup function
    return () => {
      // Remove dynamic meta tags when component unmounts
      const dynamicTags = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicTags.forEach(tag => tag.remove());
    };
  }, [title, description, keywords, currentUrl, ogImage]);

  return null;
}

export default SEOHead;