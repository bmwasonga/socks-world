import axios from 'axios';
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REG_REQ' }); // user Register request

  try {
    const response = await axios.post('/api/users/register', { user });
    dispatch({ type: 'USER_REG_SUCCESS' }); // user Register success
    console.log(response);
  } catch (error) {
    dispatch({ type: 'USER_REG_FAILED', payload: error }); // user Register failed
  }
};
