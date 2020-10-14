import axios from "axios";
import { API } from "../../vars";
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

const setNote = (note) => {
  return { type: SET_NOTE, payload: note };
};

const fetchNoteLoading = () => {
  return { type: FETCH_NOTE_LOADING };
};
const fetchNoteSuccess = (payload) => {
  return { type: FETCH_NOTE_SUCCESS, payload };
};
const fetchNoteFailed = (payload) => {
  return { type: FETCH_NOTE_FAILED, payload };
};
const fetchNote = (noteId) => (dispatch) => {
  dispatch(fetchNoteLoading());
  axios
    .get(`${API}/notes/${noteId}`, {
      headers: { authorization: localStorage.token },
    })
    .then(({ data }) => {
      return dispatch(fetchNoteSuccess(data));
    })
    .catch((err) => {
      console.log(err);
      return dispatch(fetchNoteFailed(err));
    });
};

export { setNote, fetchNote };
