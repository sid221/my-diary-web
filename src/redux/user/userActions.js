import axios from "axios";
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

// USER Login actions
const userLoginLoading = () => {
  return { type: USER_LOGIN_LOADING };
};
const userLoginSuccess = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};
const userLoginFailed = (payload) => {
  return { type: USER_LOGIN_FAILED, payload };
};

const userLogin = (user, history) => (dispatch) => {
  const { email, password } = user;
  dispatch(userLoginLoading());
  axios
    .post("/user/login", {
      email,
      password,
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      const payload = {
        token: data.token,
        profile: data.profile,
      };
      dispatch(userLoginSuccess(payload));
      history.push("/diary");
    })
    .catch((err) => {
      console.log(err);
      dispatch(userLoginFailed(err));
    });
};

const userLogout = (history) => {
  localStorage.removeItem("token");
  return { type: USER_LOGOUT, history };
};

// USER Register actions
const userRegisterLoading = () => {
  return { type: USER_REGISTER_LOADING };
};
const userRegisterSuccess = (payload) => {
  return { type: USER_REGISTER_SUCCESS, payload };
};
const userRegisterFailed = () => {
  return { type: USER_REGISTER_FAILED };
};

export { userLogin, userLogout };
