export const getAllSocksReducers = (
  state = { loading: false, socks: [], error: null },
  action
) => {
  switch (action.type) {
    case 'GET_SOCKS_REQUEST':
      return {
        ...state,
        loading: true, // this reflect on the status of data retrieval
      };
    case 'GET_SOCKS_SUCCESS':
      return {
        ...state,
        loading: false,
        socks: action.payload,
      };
    case 'GET_SOCKS_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false,
        socks: [],
      };
    default:
      return state;
  }
};

export const addSockReducer = (state = { socks: [] }, action) => {
  switch (action.type) {
    case 'ADD_SOCK_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_SOCK_SUCESS':
      return {
        loading: false,
        success: true,
      };
    case 'ADD_SOCK_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
