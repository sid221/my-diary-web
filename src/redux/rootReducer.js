import { combineReducers } from "redux";
import user from "./user/userReducer";
import diary from "./diary/diaryReducer";
import note from "./note/noteReducer";

const rootReducer = combineReducers({
  user,
  diary,
  note,
});

export default rootReducer;
