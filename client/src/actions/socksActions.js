// this will bring in the information about the socks from hte backend
import axios from 'axios';
export const getAllSocks = () => (dispatch) => {
  //logic for the async operation

  dispatch({ type: 'GET_SOCKS_REQUEST' });

  try {
    const response = axios.get('/api/socks/getsocks');
    dispatch({ type: 'GET_SOCKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_SOCKS_FAILED', payload: error });
  }
};
