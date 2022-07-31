import { configureStore } from '@reduxjs/toolkit';
import createReducer from './create/state';
import firebaseReducer from './firebase/firebase';

export default configureStore({
  reducer: {
    create: createReducer,
    firebase: firebaseReducer
  },
});