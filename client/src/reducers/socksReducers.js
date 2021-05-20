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

//the error page is still serving data. Correct that
