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
  const [{ isPending }] = usePayPalScriptReducer();

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

  return (
    <div className="paypal-button-container">
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onErrorHandler}
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        }}
      />
    </div>
  );
}

export default PayPalButton;