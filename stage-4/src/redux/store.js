import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import react from 'react';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));