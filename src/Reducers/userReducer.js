import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

// state = Cookie.get('user') ? JSON.parse(Cookie.get('user')) : initialState,
// TODO:: insted of setting cookie directly in reducer we can disptach in the component level
const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getUserInfo = (state) => state.user.user;

export default userSlice.reducer;
