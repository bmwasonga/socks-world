import axios from 'axios';
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REG_REQ' }); // user Register request

  try {
    const response = await axios.post('/api/user/register', user);
    dispatch({ type: 'USER_REG_SUCCESS' }); // user Register success
    console.log(response);
  } catch (error) {
    dispatch({ type: 'USER_REG_FAILED', payload: error }); // user Register failed
  }
};

// login functionality

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });

  try {
    const response = await axios.post('/api/users/login', user);
    console.log(response);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    window.location.href = '/';
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
  }
};

//the logout functionality is

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
};

//to get all the users that

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: 'GET_USERS_REQUEST' });

  try {
    const response = await axios.get('/api/users/getallusers');
    console.log(response);
    dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_FAILED', payload: error });
  }
};

// to  delete the user

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.post('/api/users/deletesuer', { userId });
    alert('User has been deleted');
    window.location.reload();
  } catch (error) {
    alert('SOmething went wrong');
    console.log(error);
  }
};
