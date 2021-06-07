import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({ grandTotal }) {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log(token);

    dispatch(placeOrder(token, grandTotal));
  }
  return (
    <div>
      <StripeCheckout
        amount={grandTotal * 100}
        shippingAddress
        currency="KES"
        token={tokenHandler}
        stripeKey="pk_test_51IzikQHuDLgQ4drvbo8APoISvagi1x4kieRfNx7gxVztmiTniEZ6HwHQI8zIKvNCeo8ICatQIIXRMj1r5a8Tv8r900jnJTwYmO"
      >
        <button className="btn btn-primary"> Pay now</button>
      </StripeCheckout>
    </div>
  );
}
