import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         immutableCheck: false,
         serializableCheck: false,
      }).concat([createLogger()]),
   devTools: process.env.NODE_ENV === 'development',
});

export default store;
