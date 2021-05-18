// this will bring in the information about the socks from hte backend
import axios from 'axios';
export const getAllSocks = () => async (dispatch) => {
  //logic for the async operation

  dispatch({ type: 'GET_SOCKS_REQUEST' });

  try {
    const response = await axios.get('/api/socks/getallsocks');
    console.log(response);
    dispatch({ type: 'GET_SOCKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_SOCKS_FAILED', payload: error });
  }
};
