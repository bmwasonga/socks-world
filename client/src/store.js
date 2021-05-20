//  this the entry point of the application

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllSocksReducers } from '../src/reducers/socksReducers';
import { cartReducer } from './reducers/cartReducers';

const finalReducer = combineReducers({
  getAllSocksReducers: getAllSocksReducers,
  //the cartReducer
  cartReducer: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  finalReducer,
  composeWithDevTools(compose(applyMiddleware(...middleware)))
);

export default store;
