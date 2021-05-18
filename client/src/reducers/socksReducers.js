export const getAllSocksReducers = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SOCKS_REQUEST':
      return {
        ...state,
      };
    case 'GET_SOCKS_SUCCESS':
      return {
        sock: action.payload,
      };
    case 'GET_SOCKS_FAILED':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

//the error page is still serving data. Correct that
