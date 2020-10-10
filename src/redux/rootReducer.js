import { combineReducers } from "redux";
import user from "./user/userReducer";
import diary from "./diary/diaryReducer";

const rootReducer = combineReducers({
  user,
  diary,
  // note:
});

export default rootReducer;
