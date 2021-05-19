export const getAllSocksReducers = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SOCKS_REQUEST':
      return {
        loading: true, // this reflect on the status of data retrieval
        ...state,
      };
    case 'GET_SOCKS_SUCCESS':
      return {
        loading: false,
        socks: action.payload,
      };
    case 'GET_SOCKS_FAILED':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

//the error page is still serving data. Correct that
