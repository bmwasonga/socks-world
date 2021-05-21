import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const cartSate = useSelector((state) => state.cartReducer);
  const cartItems = cartSate.cartItems;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1> {cartItems.length}</h1>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
