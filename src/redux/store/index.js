import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import logger from 'redux-logger';

const reducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
