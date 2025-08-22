// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-T4EZW07BLS', {
      page_location: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions (form submissions, purchases, etc.)
export const trackConversion = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      send_to: 'G-T4EZW07BLS',
    });
  }
};

// Track link clicks
export const trackLinkClick = (linkText: string, destination: string) => {
  trackEvent('click', 'link', `${linkText} -> ${destination}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', 'form', formName);
};

// Track package selections
export const trackPackageSelection = (packageName: string, price: string) => {
  trackEvent('select_package', 'engagement', packageName, parseInt(price.replace(/[^0-9]/g, '')));
};

// Track ROI calculator usage
export const trackROICalculatorUsage = (inputs: Record<string, any>) => {
  trackEvent('roi_calculator_used', 'engagement', 'calculator_interaction');
};