import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../slices/counterSlice';
import paymentReducer from '../slices/paymentSlice';

const reducer = {
  counter: counterReducer,
  payment: paymentReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
