import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './activitySlice';

export default configureStore({
  reducer: {
    activity: activityReducer,
  }
})