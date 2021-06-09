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

export const filterSocks = (searchKey, category) => async (dispatch) => {
  let filtredSocks;
  dispatch({ type: 'GET_SOCKS_REQUEST' });

  try {
    const response = await axios.get('/api/socks/getallsocks');
    filtredSocks = response.data.filter((socks) => {
      return socks.name.toLowerCase().includes(searchKey);
    });

    if (category !== 'all') {
      filtredSocks = response.data.filter((socks) => {
        return socks.category.toLowerCase() === category;
      });
    }
    dispatch({ type: 'GET_SOCKS_SUCCESS', payload: filtredSocks });
  } catch (error) {
    dispatch({ type: 'GET_SOCKS_FAILED', payload: error });
  }
};

export const addSock = (sock) => async (dispatch) => {
  dispatch({ type: 'ADD_SOCK_REQUEST' });

  try {
    const response = await axios.post('/api/socks/addsock', { sock });
    dispatch({ type: 'ADD_SOCK_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'ADD_SOCK_FAILED', payload: error });
  }
};
