import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../actions/orderActions';

export default function Orders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders);
  }, []);

  return (
    <div>
      <h1 className="text-center">Here are your orders</h1>
    </div>
  );
}
