import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../actions/orderActions';
import Error from '../Error';
import Loading from '../Loading';

export default function Orders() {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getUserOrdersReducer);

  const { orders, error, loading } = ordersState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h1 className="text-center">Here are your orders</h1>

      <div className="row justify-content-center ">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}

        {orders &&
          orders.map((order) => {
            return (
              <div className="col-md-10 bg-success text-white m-1 rounded">
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h5 classname="font-weight-bold">ITEMS</h5>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div className="">
                          <p>
                            {item.name} [{item.size}* {item.quantity}] ={' '}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h5>ADDRESS</h5>
                    <hr />

                    <p>street: {order.shippingAddress.street}</p>
                    <p>city: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h5>ORDER INFO</h5>
                    <hr />

                    <p>Order amt: {order.orderAmount}Ksh</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id : {order.transactionID}</p>
                    <p>Order Id: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
