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
  UPDATE_USER_PROFILE_LOADING,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILED,
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
    .catch(({ response }) => {
      console.log(response);
      dispatch(userLoginFailed(response));
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
    .catch(({ response }) => {
      console.log(response);
      dispatch(userRegisterFailed(response));
    });
};

// USER profile fetch
const fetchUserLoading = () => {
  return { type: FETCH_USER_LOADING };
};
const fetchUserSuccess = (payload) => {
  return { type: FETCH_USER_SUCCESS, payload };
};
const fetchUserFailed = (payload) => {
  return { type: FETCH_USER_FAILED, payload };
};
const fetchUser = (history) => (dispatch) => {
  let token = localStorage.token;
  dispatch(fetchUserLoading());
  axios
    .get(`${API}/user/profile`, {
      headers: {
        authorization: token,
      },
    })
    .then(({ data }) => {
      dispatch(fetchUserSuccess(data));
    })
    .catch(({ response }) => {
      console.log("error: ", response);
      dispatch(fetchUserFailed(response));
      // if (error.response.data.error === "auth/id-token-expired") {
      //   // localStorage.removeItem("token");
      //   // history.push("/login");
      // }
    });
};

// UPDATE USER PROFILE
const updateUserProfileLoading = () => {
  return { type: UPDATE_USER_PROFILE_LOADING };
};
const updateUserProfileSuccess = (payload) => {
  return { type: UPDATE_USER_PROFILE_SUCCESS, payload };
};
const updateUserProfileFailed = (payload) => {
  return { type: UPDATE_USER_PROFILE_FAILED, payload };
};
const updateUserProfile = (data) => (dispatch) => {
  dispatch(updateUserProfileLoading());
  axios
    .patch(`${API}/user/profile`, data, {
      headers: { authorization: localStorage.token },
    })
    .then(({ data }) => {
      // console.log(data);
      let payload = { message: data.message, profile: data.profile };
      dispatch(updateUserProfileSuccess(payload));
    })
    .catch(({ response }) => {
      console.log(response);
      dispatch(updateUserProfileFailed(response));
    });
};

export { userLogin, userRegister, userLogout, fetchUser, updateUserProfile };
