import axios from "axios";
import { API } from "../../vars";
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

const createNoteLoading = () => {
  return { type: CREATE_NOTE_LOADING };
};
const createNoteSuccess = (payload) => {
  return { type: CREATE_NOTE_SUCCESS, payload };
};
const createNoteFailed = (payload) => {
  return { type: CREATE_NOTE_FAILED, payload };
};
const createNote = (noteData, history) => (dispatch) => {
  dispatch(createNoteLoading());
  axios
    .post(`${API}/notes`, noteData, {
      headers: {
        authorization: localStorage.token,
      },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(createNoteSuccess(data));
      history.push(`/note/${data.createdNote.noteId}`);
    })
    .catch((err) => {
      console.log(err);
      return dispatch(createNoteFailed(err));
    });
};

// Delete Note Action
const deleteNoteLoading = () => {
  return { type: DELETE_NOTE_LOADING };
};
const deleteNoteSuccess = (payload) => {
  return { type: DELETE_NOTE_SUCCESS, payload };
};
const deleteNoteFailed = (payload) => {
  return { type: DELETE_NOTE_FAILED, payload };
};
const deleteNote = (noteId, history) => (dispatch) => {
  dispatch(deleteNoteLoading());
  axios
    .delete(`${API}/notes/${noteId}`, {
      headers: {
        authorization: localStorage.token,
      },
    })
    .then(({ data }) => {
      // console.log(data);
      dispatch(deleteNoteSuccess(data));
      history.push(`/diary`);
    })
    .catch((err) => {
      console.log(err);
      return dispatch(deleteNoteFailed(err));
    });
};

// Edit note
const editNoteLoading = () => {
  return { type: EDIT_NOTE_LOADING };
};
const editNoteSuccess = (payload) => {
  return { type: EDIT_NOTE_SUCCESS, payload };
};
const editNoteFailed = (payload) => {
  return { type: EDIT_NOTE_FAILED, payload };
};
const editNote = (updatedNoteData, noteId, history) => (dispatch) => {
  dispatch(editNoteLoading());
  axios
    .patch(
      `${API}/notes/${noteId}`,
      { updatedNoteData },
      {
        headers: {
          authorization: localStorage.token,
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(editNoteSuccess(data));
      history.push(`/note/${noteId}`);
    })
    .catch((err) => {
      console.log(err);
      return dispatch(editNoteFailed(err));
    });
};

export { setNote, fetchNote, createNote, deleteNote, editNote };
