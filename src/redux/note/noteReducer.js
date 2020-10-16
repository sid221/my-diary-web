import {
  SET_NOTE,
  FETCH_NOTE_LOADING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILED,
  CREATE_NOTE_LOADING,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILED,
  DELETE_NOTE_LOADING,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILED,
  EDIT_NOTE_LOADING,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILED,
} from "./noteActionTypes";

import { USER_LOGOUT } from "../user/userActionTypes";

const initialState = {
  currentNote: null,
  noteLoading: false,
  noteError: null,
  createNoteLoading: false,
  createNoteData: null,
  createNoteError: null,
  deleteNoteLoading: false,
  deleteNoteData: null,
  deleteNoteError: null,
  editNoteLoading: false,
  editNoteData: null,
  editNoteError: null,
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

    // CREATE NEW NOTE
    case CREATE_NOTE_LOADING:
      return { ...state, createNoteLoading: true };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        createNoteLoading: false,
        createNoteError: null,
        createNoteData: action.payload,
        currentNote: action.payload.createdNote,
      };
    case CREATE_NOTE_FAILED:
      return {
        ...state,
        createNoteLoading: false,
        createNoteError: action.payload,
      };

    // Delete Note
    case DELETE_NOTE_LOADING:
      return { ...state, deleteNoteLoading: true };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deleteNoteLoading: false,
        deleteNoteError: null,
        deleteNoteData: action.payload,
      };
    case DELETE_NOTE_FAILED:
      return {
        ...state,
        deleteNoteLoading: false,
        deleteNoteError: action.payload,
      };

    // Save Edit note
    case EDIT_NOTE_LOADING:
      return { ...state, editNoteLoading: true };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        editNoteLoading: false,
        editNoteData: action.payload,
        editNoteError: null,
        currentNote: null,
      };
    case EDIT_NOTE_FAILED:
      return {
        ...state,
        editNoteLoading: false,
        editNoteError: action.payload,
      };

    default:
      return { ...state };
  }
};

export default note;
