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
  UPDATE_USER_PROFILE_LOADING,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILED,
} from "./userActionTypes";

const initState = {
  loginLoading: false,
  loginError: null,
  registerLoading: false,
  registerError: null,
  token: null,
  profileLoading: false,
  profileError: null,
  profile: null,
  profileUpdateLoading: false,
  profileUpdateError: null,
  profileUpdateSuccessMsg: null,
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
        loginError: null,
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
      localStorage.removeItem("token");
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

    // FETCH USER PROFILE
    case FETCH_USER_LOADING:
      return {
        ...state,
        profileLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        profileLoading: false,
        profile: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        profileLoading: false,
        profileError: action.payload,
      };

    // USER PROFILE UPDATE
    case UPDATE_USER_PROFILE_LOADING:
      return {
        ...state,
        profileUpdateLoading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profileUpdateLoading: false,
        profileUpdateSuccessMsg: action.payload.message,
        profile: action.payload.profile,
      };
    case UPDATE_USER_PROFILE_FAILED:
      return {
        ...state,
        profileUpdateLoading: false,
        profileUpdateError: action.payload,
      };
    default:
      return state;
  }
};

export default user;
