import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  USER_LOGOUT,
} from "./userActionTypes";

const initState = {
  loginLoading: false,
  loginError: null,
  registerLoading: false,
  registerError: null,
  token: null,
  profile: null,
};

const user = (state = initState, action) => {
  switch (action.type) {
    // USER LOGIN
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        ...action.payload,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload,
      };

    // USER LOGOUT
    case USER_LOGOUT:
      if (action.history) action.history.push("/login");
      return {};

    // USER REGISTER
    case USER_REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        ...action.payload,
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        registerLoading: false,
        registerError: action.payload,
      };

    default:
      return state;
  }
};

export default user;
