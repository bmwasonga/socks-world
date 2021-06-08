import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from './Error';
import Loading from './Loading';
import Success from './Success';

export default function Checkout({ grandTotal }) {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.placeOrderReducer);

  const { loading, error, success } = orderState;

  function tokenHandler(token) {
    console.log(token);

    dispatch(placeOrder(token, grandTotal));
  }
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong!!" />}
      {success && <Success success="Your Order has been recieved" />}

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
