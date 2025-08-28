import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

function SEOHead({ 
  title = "HighDALink - Elite DR90+ Editorial Backlinks | Top 1%",
  description = "Top 1% provider of elite DR90+ DA90+ editorial backlinks. Premium high authority link building services trusted by Fortune 500 companies. White hat SEO with 30-day guarantee.",
  keywords = "DR90+ editorial backlinks, DA90+ editorial backlinks, elite backlink building services, high authority link building, premium link building services, top 1% link building provider, 90+ domain rating backlinks, 90+ domain authority backlinks, white hat link building, organic editorial backlinks, premium SEO services, high quality backlinks, authority link building, editorial link placement, top tier backlinks, elite SEO services, professional link building, enterprise link building, Fortune 500 link building, premium editorial links, high DR backlinks, high DA backlinks, quality link building services, expert link building, advanced SEO link building, premium domain authority links, elite editorial placements, top quality backlinks, professional SEO services, enterprise SEO solutions",
  ogImage = "https://curtiskelton88-highd-jpim.bolt.host/og-image.jpg",
  canonical,
  noindex = false
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = canonical || `https://curtiskelton88-highd-jpim.bolt.host${location.pathname}`;

  // FAQ Schema for pages with FAQs
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

    // Update robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
      document.head.appendChild(robotsMeta);
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
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
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

    // Add FAQ schema only for FAQ pages
    if (location.pathname === '/faq') {
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
    }

    // Cleanup function
    return () => {
      // Remove dynamic meta tags when component unmounts
      const dynamicTags = document.querySelectorAll('meta[data-dynamic="true"]');
      dynamicTags.forEach(tag => tag.remove());
    };
  }, [title, description, keywords, currentUrl, ogImage, noindex, location.pathname]);

  return null;
}

export default SEOHead;