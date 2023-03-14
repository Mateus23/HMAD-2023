import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import preferencesReducer from './preferencesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    preferences: preferencesReducer
  }
})