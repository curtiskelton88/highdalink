import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { trackFormSubmission } from '../utils/analytics';

// PayPal Error Handler Component
const PayPalErrorHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Payment System Temporarily Unavailable
            </h3>
            <p className="text-yellow-700 mb-4">
              We're experiencing technical difficulties with our payment processor. 
              Please try one of these alternatives:
            </p>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-yellow-200">
                <h4 className="font-medium text-gray-900 mb-2">Contact Us Directly</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Email us at <strong>highdalink@gmail.com</strong> with your package selection
                </p>
                <p className="text-sm text-gray-600">
                  We'll send you a secure payment link within 1 hour
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-yellow-200">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                  <p className="font-medium text-gray-900">Bank Transfer Available</p>
                </div>
                <p className="text-sm text-gray-600">We'll provide banking details via email</p>
              </div>
            </div>
            
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

interface PayPalButtonProps {
  amount: string;
  packageName: string;
  description: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

function PayPalButton({ amount, packageName, description, onSuccess, onError }: PayPalButtonProps) {
  const [{ isPending, isRejected, isResolved }] = usePayPalScriptReducer();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Handle script loading errors
  if (isRejected) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="text-red-800 text-sm">
          <p className="font-medium mb-2">Payment system temporarily unavailable</p>
          <p>Please try refreshing the page or contact support if the issue persists.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: 'USD'
          },
          description: `${packageName} - ${description}`
        }
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    });
  };

  const onApprove = async (data: any, actions: any) => {
    try {
      setIsProcessing(true);
      const details = await actions.order.capture();
      
      // Track successful payment
      trackFormSubmission('paypal_payment_success', true);
      
      // Simulate processing time
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess(true);
        
        // Handle successful payment
        if (onSuccess) {
          onSuccess(details);
        } else {
          alert(`Payment successful! Transaction ID: ${details.id}\n\nThank you for your purchase of ${packageName}. We will contact you within 24 hours to begin your link building campaign.`);
        }
      }, 2000);
      
      console.log('Payment completed:', details);
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
      trackFormSubmission('paypal_payment_error', false);
      if (onError) {
        onError(error);
      }
    }
  };

  const onErrorHandler = (error: any) => {
    console.error('PayPal payment error:', error);
    setIsProcessing(false);
    trackFormSubmission('paypal_payment_error', false);
    if (onError) {
      onError(error);
    } else {
      alert('Payment failed. Please try again or contact support at highdalink@gmail.com');
    }
  };

  const onCancel = () => {
    setIsProcessing(false);
    console.log('PayPal payment cancelled');
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading payment options...</span>
      </div>
    );
  }

  return (
    <PayPalErrorHandler>
      <div className="space-y-4">
        {/* Security badges */}
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span>Secure Payment</span>
          </div>
        </div>

        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal"
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onErrorHandler}
          onCancel={onCancel}
        />

        {/* Processing overlay */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Processing Payment</h3>
              <p className="text-gray-600">Please wait while we process your payment...</p>
            </div>
          </div>
        )}

        {/* Success message */}
        {paymentSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Payment Successful!</h3>
                <p className="text-green-700">Your account has been created and login credentials have been sent to your email.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PayPalErrorHandler>
  );
}

// Main PayPal Provider Component
interface PayPalProviderProps {
  children: React.ReactNode;
}

export const PayPalProvider: React.FC<PayPalProviderProps> = ({ children }) => {
  const initialOptions = {
    clientId: import.meta.env.VITE_REACT_APP_PAYPAL_CLIENT_ID || "ATIWMe4iiGvujoqDUz6Tu9-3eyWB8OmLJmLdFmcRfTgexKyao6d4bP2UbAQ5oNENyKfkZfiOVYrs8OmQ",
    currency: "USD",
    intent: "capture",
    "disable-funding": "card",
    "data-sdk-integration-source": "react-paypal-js"
  };

  return (
    <PayPalScriptProvider options={initialOptions} deferLoading={false}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalButton;