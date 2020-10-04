import axios from "axios";
import {
  USER_LOGIN,
  USER_REGISTER,
  FETCH_USER,
  SET_USER,
} from "./userActionTypes";

const userLogin = (user, history) => (dispatch) => {
  const { email, password } = user;

  axios
    .post("https://memoir-api.herokuapp.com/api/v2/user/login", {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      const payload = {
        token: res.data.token,
        profile: res.data.profile,
      };
      dispatch({
        type: SET_USER,
        payload,
      });
      history.push("/diary")
    })
    .catch((err) => console.log(err));
};

export { userLogin };
