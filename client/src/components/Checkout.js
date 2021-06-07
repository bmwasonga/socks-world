import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

export default function Checkout({ grandTotal }) {
  function tokenHandler() {}
  return (
    <div>
      <StripeCheckout
        amount={grandTotal}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51IzikQHuDLgQ4drvbo8APoISvagi1x4kieRfNx7gxVztmiTniEZ6HwHQI8zIKvNCeo8ICatQIIXRMj1r5a8Tv8r900jnJTwYmO"
      >
        <button className="btn btn-primary"> Pay now</button>
      </StripeCheckout>
    </div>
  );
}
