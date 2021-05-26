import axios from 'axios';
export const registerUser = (user) => (dispatch) => {
  dispatch({ type: 'USER_REG_REQ' }); // user Register request

  try {
    axios.post('/api/users/register', { user });
    dispatch({ type: 'USER_REG_SUCCESS' }); // user Register success
  } catch (error) {
    dispatch({ type: 'USER_REG_FAILED', payload: error }); // user Register failed
  }
};
