export const getAllSocksReducers = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SOCKS_REQUEST ':
      return {
        ...state,
      };
    case 'GET_SOCKS_SUCCESS':
      return {
        socks: action.payload,
      };
    case 'GET_SOCKS_FAILED':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
