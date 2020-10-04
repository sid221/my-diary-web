import {
  USER_LOGIN,
  USER_REGISTER,
  FETCH_USER,
  SET_USER,
} from "./userActionTypes";

const initState = {
  token: "",
  profile: "",
};

const user = (state = initState, action) => {
  switch (action.type) {
    // case USER_LOGIN:
    //   return {
    //     ...state,
    //     numOfCakes: state.numOfCakes - 1,
    //   };
    // case USER_REGISTER:
    //   return {
    //     ...state,
    //     numOfCandy: state.numOfCandy - action.payload,
    //   };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default user;
