import {
  FETCH_DIARY_NOTES_LOADING,
  FETCH_DIARY_NOTES_SUCCESS,
  FETCH_DIARY_NOTES_FAILED,
} from "./diaryActionTypes";
import { USER_LOGOUT } from "../user/userActionTypes";

const initialState = {
  notes: null,
  notesLoading: false,
  notesError: null,
};

const diary = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIARY_NOTES_LOADING:
      return {
        ...state,
        notesLoading: true,
      };
    case FETCH_DIARY_NOTES_SUCCESS:
      return {
        ...state,
        notesLoading: false,
        notes: action.payload,
      };
    case FETCH_DIARY_NOTES_FAILED:
      return {
        ...state,
        notesLoading: false,
        notesError: action.payload,
      };

    //USER LOGOUT
    case USER_LOGOUT:
      return {};

    default:
      return { ...state };
  }
};

export default diary;
