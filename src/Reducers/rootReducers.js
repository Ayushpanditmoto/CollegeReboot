import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userReducer';

const rootReducer = combineReducers({
  // auth: authReducer,
  user: userSlice,
  // // ...
});

export default rootReducer;
