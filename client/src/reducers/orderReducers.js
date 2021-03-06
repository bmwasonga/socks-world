export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLACE_ORDER_REQUEST':
      return {
        loading: true,
      };
    case 'PLACE_ORDER_SUCCESS':
      return {
        loading: false,
        success: true,
      };
    case 'PLACE_ORDER_FAILED':
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case 'GET_USER_ORDERS_REQUEST':
      return {
        loading: true,
      };
    case 'GET_USER_ORDERS_SUCCESS':
      return {
        loading: false,
        sucess: true,
        orders: action.payload,
      };
    case 'GET_USER_ORDERS_FAILED':
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case 'GET_ALL_ORDERS_REQUEST':
      return {
        loading: true,
      };
    case 'GET_ALL_ORDERS_SUCCESS':
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case 'GET_ALL_ORDERS_FAILED':
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
