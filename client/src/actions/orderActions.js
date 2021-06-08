import axios from 'axios';
export const placeOrder = (token, grandTotal) => async (dispatch, getState) => {
  dispatch({ type: 'PLACE_ORDER_REQUEST' });

  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post('/api/orders/placeorder', {
      token,
      grandTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: 'PLACE_ORDER_SUCCESS' });

    console.log(response);
  } catch (error) {
    dispatch({ type: 'PLACE_ORDER_FAILED' });

    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentState;

  dispatch({ type: 'GET_USER_ORDERS_REQUEST' });

  try {
    const response = await axios.post('api/orders/getuserorders', {
      userId: currentUser._id,
    });
    console.log(response);
    dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
  }
};
