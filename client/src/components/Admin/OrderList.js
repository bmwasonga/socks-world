import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';
import Error from '../Error';
import { deliverOrder, getAllOrders } from '../../actions/orderActions';

export default function OrderList() {
  const dispatch = useDispatch();

  const ordersState = useSelector((state) => state.getAllOrdersReducer);

  const { loading, error, orders, success } = ordersState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      <h1>Here is the list of items ordered and their status</h1>

      <table className="table table-stripped">
        <thead>
          <th>Order ID</th>
          <th>Email</th>
          <th>User ID</th>
          <th>Amount</th>
          <th>date</th>
          <th>status</th>
        </thead>

        <tbody>
          {orders &&
            orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order._id.substring(0, 10)}...</td>
                  <td>{order.email}</td>
                  <td>{order.userId.substring(0, 10)}...</td>
                  <td>{order.orderAmount}ksh</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <p className="text-success ">Delivered</p>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
