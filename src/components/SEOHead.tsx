import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

function SEOHead({ 
  title = "HighDALink - High Authority Link Building | DR90+ Editorial Backlinks",
  description = "Premium DR90+/DA90+ editorial backlinks and SEO content. Top 1% link building provider trusted by global brands. Elite writers, organic placement, proven results.",
  keywords = "DR90+ backlinks, DA90+ editorial backlinks, high authority link building, premium SEO services, editorial link building, organic backlinks, white hat SEO",
  ogImage = "/og-image.jpg"
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = `https://curtiskelton88-highd-jpim.bolt.host${location.pathname}`;

  // Schema markup for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HighDALink",
    "description": "Premium DR90+ editorial backlinks and high-authority link building services",
    "url": "https://curtiskelton88-highd-jpim.bolt.host",
    "logo": "https://curtiskelton88-highd-jpim.bolt.host/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "support@highdaLink.com"
    },
    "sameAs": [
      "https://twitter.com/highdaLink",
      "https://linkedin.com/company/highdaLink"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "247"
    }
  };

  // Service schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DR90+ Editorial Backlink Building",
    "description": "Premium high-authority editorial backlinks from DR90+ domains with guaranteed results",
    "provider": {
      "@type": "Organization",
      "name": "HighDALink"
    },
    "serviceType": "SEO Link Building",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Link Building Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite One Package"
          },
          "price": "600",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Authority Pro Package"
          },
          "price": "1100",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agency Monthly Package"
          },
          "price": "2000",
          "priceCurrency": "USD"
        }
      ]
    }
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
      { property: 'og:site_name', content: 'HighDALink' }
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
      { name: 'twitter:image', content: ogImage }
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