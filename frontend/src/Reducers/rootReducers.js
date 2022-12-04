import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  // auth: authReducer,
  user: userReducer,
  // // ...
});

export default rootReducer;
