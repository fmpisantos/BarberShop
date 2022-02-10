import { configureStore } from '@reduxjs/toolkit';
import createReducer from './create/state';

export default configureStore({
  reducer: {
    create: createReducer,
  },
});