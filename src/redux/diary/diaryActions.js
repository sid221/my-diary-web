import axios from "axios";
import { API } from "../../vars";
import {
  FETCH_DIARY_NOTES_LOADING,
  FETCH_DIARY_NOTES_SUCCESS,
  FETCH_DIARY_NOTES_FAILED,
} from "./diaryActionTypes";

// FETCH USER NOTES
const fetchUserNotesLoading = () => {
  return { type: FETCH_DIARY_NOTES_LOADING };
};
const fetchUserNotesSuccess = (payload) => {
  return { type: FETCH_DIARY_NOTES_SUCCESS, payload };
};
const fetchUserNotesFailed = (payload) => {
  return { type: FETCH_DIARY_NOTES_FAILED, payload };
};
const fetchUserNotes = () => (dispatch) => {
  dispatch(fetchUserNotesLoading());
  axios
    .get(`${API}/notes`, {
      headers: { authorization: localStorage.token },
    })
    .then(({ data }) => {
    //   console.log(data);
      dispatch(fetchUserNotesSuccess(data));
    })
    .catch((err) => {
      // console.log(err.response );
        dispatch(fetchUserNotesFailed(err));
    });
};

export { fetchUserNotes };
