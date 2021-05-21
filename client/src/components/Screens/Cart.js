import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const cartSate = useSelector((state) => state.cartReducer);
  const cartItems = cartSate.cartItems;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2> My cart</h2>

          {cartItems.map((item, idx) => {
            return (
              <div className="flex-container flex-column " key={idx}>
                <div>
                  {item.name} [{item.size}]
                </div>
                <div>
                  price: {item.quantity} *{item.prices[0][item.size]} =
                  {item.price}
                </div>
                <div></div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
