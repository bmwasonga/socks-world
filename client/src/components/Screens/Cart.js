import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillDelete,
} from 'react-icons/ai';
import { addToCart, deleteFromCart } from '../../actions/cartActions';

export default function Cart() {
  const cartSate = useSelector((state) => state.cartReducer);
  const cartItems = cartSate.cartItems;

  //dispatch the add and reduce to cart cartActions
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2> My cart</h2>

          {cartItems.map((item, idx) => {
            return (
              <div className="flex-container" key={idx}>
                <div className=" m-1 w-100 ">
                  <h5>
                    {item.name} [{item.size}]
                  </h5>
                  <h5>
                    price: {item.quantity} *{item.prices[0][item.size]} =
                    {item.price}
                  </h5>
                  <h5>
                    Quantity:
                    <AiOutlinePlusCircle
                      color="green"
                      onClick={() => {
                        dispatch(addToCart(item, item.size, item.quantity + 1));
                      }}
                    />
                    <b> {item.quantity} </b>
                    <AiOutlineMinusCircle
                      color="red"
                      onClick={() => {
                        dispatch(addToCart(item, item.size, item.quantity - 1));
                      }}
                    />
                  </h5>
                  <hr />
                </div>
                <div className="m-1 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: '80px', width: '80px' }}
                  />
                </div>
                <div className="w-10 mt-4">
                  <AiFillDelete
                    color="red"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="">this should appear on the side</div>
      </div>
    </div>
  );
}
