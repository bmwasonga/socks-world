//  this the entry point of the application

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  addSockReducer,
  getAllSocksReducers,
} from '../src/reducers/socksReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from './reducers/userReducers';
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from './reducers/orderReducers';

const finalReducer = combineReducers({
  getAllSocksReducers: getAllSocksReducers,
  //the cartReducer
  cartReducer: cartReducer,
  //registerd user reducers
  registerUserReducer: registerUserReducer,

  loginUserReducer: loginUserReducer,

  placeOrderReducer: placeOrderReducer,

  getUserOrdersReducer: getUserOrdersReducer,

  addSockReducer: addSockReducer,

  getAllOrdersReducer: getAllOrdersReducer,

  getAllUsersReducer: getAllUsersReducer,
});

const middleware = [thunk];

//preference of session storage for the data.
const cartItems = sessionStorage.getItem('cartItems')
  ? JSON.parse(sessionStorage.getItem('cartItems'))
  : [];

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(compose(applyMiddleware(...middleware)))
);

export default store;
