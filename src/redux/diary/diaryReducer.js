import {
  FETCH_DIARY_NOTES_LOADING,
  FETCH_DIARY_NOTES_SUCCESS,
  FETCH_DIARY_NOTES_FAILED,
} from "./diaryActionTypes";
import { USER_LOGOUT } from "../user/userActionTypes";
import {
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
} from "../note/noteActionTypes";

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

    // On New Note Creation Add to note list
    case CREATE_NOTE_SUCCESS:
      return !!state.notes
        ? { ...state, notes: [...state.notes, action.payload.createdNote] }
        : { ...state };

    // On delete a Note
    case DELETE_NOTE_SUCCESS:
      return !!state.notes
        ? {
            ...state,
            notes: state.notes.filter(
              (note) => note.noteId !== action.payload.noteId
            ),
          }
        : { ...state };

    default:
      return { ...state };
  }
};

export default diary;
