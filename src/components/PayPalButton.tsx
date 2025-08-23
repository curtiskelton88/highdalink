              color: "blue",
              shape: "rect",
              label: "paypal"
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      currency_code: "USD"
                    },
                    description: `${planName} - SEO Content Package`
                  }
                ]
              });
            }}
            onApprove={async (data, actions) => {
              if (actions.order) {
                const details = await actions.order.capture();
                setIsProcessing(true);
                
                // Simulate processing time
                setTimeout(() => {
                  setIsProcessing(false);
                  setPaymentSuccess(true);
                  onSuccess(details);
                }, 2000);
              }
            }}
            onError={(err) => {
              console.error('PayPal payment error:', err);
              setIsProcessing(false);
              // Show user-friendly error message
              alert('Payment failed. Please try again or contact support at highdalink@gmail.com');
            }}
            onCancel={() => {
              setIsProcessing(false);
              console.log('Payment cancelled by user');
import React from 'react';
            }}
          />

          {/* Processing overlay */}
          {isProcessing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Processing Payment</h3>
                <p className="text-gray-600">Please wait while we process your payment...</p>
              </div>
          <Shield className="w-5 h-5 text-yellow-600 mr-2" />
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
              <p className="font-medium text-gray-900">Bank Transfer Available</p>
              <p className="text-sm text-gray-600">We'll provide banking details via email</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
        >
          Try Again
        </button>
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
      <PayPalErrorHandler>
        onError(error);
        <div className="space-y-4">
      </div>
          {/* Security badges */}
    );
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
  }
            <div className="flex items-center">

              <Shield className="w-4 h-4 mr-1" />
  return (
              <span>256-bit SSL</span>
    <div className="paypal-button-container">
            </div>
      <PayPalButtons
            <div className="flex items-center">
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "AXj_kRWit62OHFkVx4FonS2Jg3jGkU96uNe8WVVwGXulEQefUPD17Dig3l6WaZwo2PGtyh9FiKMgj3XF",
              <CheckCircle className="w-4 h-4 mr-1" />
        onApprove={onApprove}
              <span>Secure Payment</span>
        onError={onErrorHandler}
            </div>
        "disable-funding": "card",
          </div>
        "data-sdk-integration-source": "react-paypal-js"

          console.log('PayPal payment cancelled');
          <PayPalButtons
      deferLoading={false}
            style={{
        }}
              layout: "vertical",
export default PayPalButton;