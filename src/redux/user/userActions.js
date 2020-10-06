import axios from "axios";
import { API } from "../../vars";
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
    .post(`${API}/user/login`, {
      email,
      password,
    })
    .then(({ data }) => {
      let idToken = `Bearer ${data.token}`;
      localStorage.setItem("token", idToken);
      const payload = {
        token: idToken,
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
  // const token = localStorage.token;
// axios
//     .post(`${API}/user/logout`, {})
//     .then(({ data }) => {
//       console.log(data);
//       localStorage.removeItem("token");
//     })
//     .catch((err) => {
//       console.log(err);
//       localStorage.removeItem("token");
//     });

  return { type: USER_LOGOUT, history };
};

// USER Register actions
const userRegisterLoading = () => {
  return { type: USER_REGISTER_LOADING };
};
const userRegisterSuccess = (payload) => {
  return { type: USER_REGISTER_SUCCESS, payload };
};
const userRegisterFailed = (payload) => {
  return { type: USER_REGISTER_FAILED, payload };
};
const userRegister = (user, history) => (dispatch) => {
  dispatch(userRegisterLoading());
  axios
    .post(`${API}/user/register`, {
      ...user,
    })
    .then(({ data }) => {
      let idToken = `Bearer ${data.token}`;
      localStorage.setItem("token", idToken);
      const payload = {
        token: idToken,
        profile: data.profile,
      };
      dispatch(userRegisterSuccess(payload));
      history.push("/diary");
    })
    .catch((err) => {
      console.log(err);
      dispatch(userRegisterFailed(err));
    });
};

export { userLogin, userRegister, userLogout };
