import {
  // EDIT_NOTE,
  SET_NOTE,
  FETCH_NOTE_LOADING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILED,
  // CREATE_NOTE_LOADING,
  // CREATE_NOTE_SUCCESS,
  // CREATE_NOTE_FAILED,
  // SAVE_NOTE_LOADING,
  // SAVE_NOTE_SUCCESS,
  // SAVE_NOTE_FAILED,
} from "./noteActionTypes";

import { USER_LOGOUT } from "../user/userActionTypes";

const initialState = {
  currentNote: null,
  noteLoading: false,
  noteError: null,
};

const note = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTE:
      return { ...state, currentNote: action.payload };

    // FETCH NOTE
    case FETCH_NOTE_LOADING:
      return { ...state, noteLoading: true };
    case FETCH_NOTE_SUCCESS:
      return { ...state, noteLoading: false, currentNote: action.payload };
    case FETCH_NOTE_FAILED:
      return { ...state, noteLoading: false, noteError: action.payload };

    // LOGOUT USER DATA CLEANING
    case USER_LOGOUT:
      return {};
      
    default:
      return { ...state };
  }
};

export default note;
