import Cookie from 'js-cookie';
const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const userReducer = (
  state = Cookie.get('user') ? JSON.parse(Cookie.get('user')) : initialState,
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
