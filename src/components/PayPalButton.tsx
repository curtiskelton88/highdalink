import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { trackFormSubmission } from '../utils/analytics';

interface PayPalButtonProps {
  amount: string;
  packageName: string;
  description: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

function PayPalButton({ amount, packageName, description, onSuccess, onError }: PayPalButtonProps) {
  const [{ isPending, isRejected, isResolved }] = usePayPalScriptReducer();

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
      const details = await actions.order.capture();
      
      // Track successful payment
      trackFormSubmission('paypal_payment_success', true);
      
      // Handle successful payment
      if (onSuccess) {
        onSuccess(details);
      } else {
        alert(`Payment successful! Transaction ID: ${details.id}\n\nThank you for your purchase of ${packageName}. We will contact you within 24 hours to begin your link building campaign.`);
      }
      
      console.log('Payment completed:', details);
    } catch (error) {
      console.error('Payment error:', error);
      trackFormSubmission('paypal_payment_error', false);
      if (onError) {
        onError(error);
      } else {
        alert('Payment failed. Please try again or contact support.');
      }
    }
  };

  const onErrorHandler = (error: any) => {
    console.error('PayPal error:', error);
    trackFormSubmission('paypal_payment_error', false);
    if (onError) {
      onError(error);
    } else {
      alert('Payment error occurred. Please try again.');
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading PayPal...</span>
      </div>
    );
  }

  if (!isResolved) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="text-yellow-800 text-sm">
          <p>Initializing payment system...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="paypal-button-container">
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onErrorHandler}
        onCancel={() => {
          console.log('PayPal payment cancelled');
        }}
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
          height: 40
        }}
        forceReRender={[amount, packageName]}
      />
    </div>
  );
}

export default PayPalButton;