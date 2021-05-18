//  this the entry point of the application

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllSocksReducers } from '../src/reducers/socksReducers';

const finalReducer = combineReducers({
  getAllSocksReducers: getAllSocksReducers,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
