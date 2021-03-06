import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import { useLocation, useHistory, Prompt } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchNote, deleteNote, editNote } from "../../redux/note/noteActions";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import PulseLoader from "react-spinners/PulseLoader";
import ShowError from "../../layout/ShowError";
import ModelConfirmation from "../../layout/ModelConfirmation";
import DiaryNavbar from "../../layout/diaryNavbar";
import { Input, Button } from "../../styles/styledElement";
import colors from "../../styles/theme";
import {
  StyledDiaryLayout,
  StyledDiaryHead,
  StyledDiaryBody,
  StyledNotesContainer,
  StyledNoteBody,
  StyledNoteTitle,
  StyledNoteDate,
  StyledNoteEditorContainer,
} from "../../layout/diaryLayout";

const NoteSkeleton = () => {
  return (
    <>
      <StyledNotesContainer className="note-page">
        <h1 className="note-title">{""}</h1>
        <p></p>
        <div className="note-content">Loading...</div>
      </StyledNotesContainer>
    </>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Note = ({ match, ...props }) => {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const {
    currentNote,
    noteLoading,
    noteError,
    // deleteNoteData,
    deleteNoteError,
    deleteNoteLoading,
    editNoteLoading,
    editNoteError,
  } = useSelector((state) => state.note);

  const noteMode = query.get("mode");
  // console.log("Mode: ", noteMode);
  const noteId = match.params.id;

  const [editedNote, setEditedNote] = useState({});
  const [isBlock, setIsBlock] = useState(noteMode === "edit");
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    if (!currentNote) {
      dispatch(fetchNote(noteId));
    }
  }, [currentNote, dispatch, noteId]);

  const handleNoteDelete = () => {
    setOpenModel(true);
  };
  const confirmDeleteNote = () => {
    setOpenModel(false);
    console.log("confirm");
    dispatch(deleteNote(currentNote.noteId, history));
  };

  // Edit note stuff
  const handleNoteEdit = () => {
    history.push(`/note/${noteId}?mode=edit`);
  };
  const handleNoteSave = (e) => {
    e.preventDefault();
    setIsBlock(false);
    dispatch(editNote(editedNote, noteId, history));
  };
  const setNoteTitle = (e) => {
    e.persist();
    setEditedNote((preState) => ({ ...preState, title: e.target.value }));
  };
  const setNoteCreatedDate = (value) => {
    setEditedNote((preState) => ({
      ...preState,
      createdAt: dayjs(value).format("MMM DD YYYY"),
    }));
  };
  const setNoteBody = (value) => {
    setEditedNote((preState) => ({ ...preState, body: value }));
  };

  const renderEditNote = (
    <>
      <Prompt
        when={isBlock}
        message={(location) =>
          `Are you sure you want to go to ${location.pathname}, your current data would not be saved!`
        }
      />
      <StyledDiaryHead className="note-head-container">
        {!noteLoading && !!currentNote && !noteError && (
          <Button
            onClick={handleNoteSave}
            noBackground
            className="note-edit-save"
            disabled={editNoteLoading}
          >
            {editNoteLoading ? (
              <PulseLoader color={colors.bg3} />
            ) : (
              <>
                <i className="fas fa-save"></i>
                <span> Save</span>
              </>
            )}
          </Button>
        )}
      </StyledDiaryHead>
      <StyledNotesContainer>
        {!!editNoteError && <ShowError error={editNoteError} />}
        {noteLoading ? (
          <NoteSkeleton />
        ) : !!noteError ? (
          <ShowError error={noteError} />
        ) : (
          !!currentNote && (
            <StyledNoteBody>
              <StyledNoteTitle>
                <label htmlFor="note-title">
                  <h2>Title:</h2>
                </label>
                <Input
                  name="note-title"
                  defaultValue={editedNote.title || currentNote.title}
                  placeholder={`Enter your title, Default will be "Memoir of ${dayjs(
                    Date()
                  ).format("ddd, DD MMM YYYY")}"`}
                  onChange={setNoteTitle}
                />
              </StyledNoteTitle>
              <StyledNoteDate>
                <label htmlFor="note-date">
                  <h3>Date:</h3>
                </label>
                <div className="datepicker-container">
                  <DatePicker
                    value={new Date(currentNote.createdAt)}
                    onChange={setNoteCreatedDate}
                    clearIcon={null}
                    format="dd-MM-y"
                    calendarIcon={<i className="fas fa-calendar-alt" />}
                  />
                </div>
              </StyledNoteDate>
              <StyledNoteEditorContainer>
                <ReactQuill
                  theme="snow"
                  value={editedNote.body || currentNote.body}
                  onChange={(val) => setNoteBody(val)}
                  placeholder="Write your story here..."
                />
              </StyledNoteEditorContainer>
            </StyledNoteBody>
          )
        )}
      </StyledNotesContainer>
    </>
  );

  return (
    <StyledDiaryLayout>
      <DiaryNavbar page="note" />
      <StyledDiaryBody className="note-body-container">
        {noteMode === "edit" ? (
          <>{renderEditNote}</>
        ) : (
          <>
            <StyledDiaryHead className="note-head-container">
              {!noteLoading && !!currentNote && !noteError && (
                <>
                  <Button
                    onClick={handleNoteEdit}
                    noBackground
                    className="note-edit-btn"
                  >
                    <i className="fas fa-pencil-alt" />
                    <span>{"  "}Edit</span>
                  </Button>
                  <Button
                    onClick={handleNoteDelete}
                    noBackground
                    disabled={deleteNoteLoading}
                  >
                    {deleteNoteLoading ? (
                      <PulseLoader color={colors.bg3} />
                    ) : (
                      <>
                        <i className="fas fa-trash" />
                        <span>{"  "}Delete</span>
                      </>
                    )}
                  </Button>
                </>
              )}
            </StyledDiaryHead>
            <StyledNotesContainer>
              {!deleteNoteLoading && deleteNoteError && (
                <ShowError error={deleteNoteError} />
              )}
              {noteLoading ? (
                <NoteSkeleton />
              ) : !!noteError ? (
                <ShowError error={noteError} />
              ) : (
                !!currentNote && (
                  <StyledNoteBody>
                    <h1 className="note-title">{currentNote.title}</h1>
                    <p>
                      <small>
                        {dayjs(currentNote.createdAt).format(
                          "dddd, DD MMM YYYY"
                        )}
                      </small>
                    </p>
                    <div
                      className="note-content"
                      dangerouslySetInnerHTML={{ __html: currentNote.body }}
                    ></div>
                  </StyledNoteBody>
                )
              )}
              {openModel && (
                <ModelConfirmation>
                  <p>
                    Are you sure that you want to delete this note? This is
                    irreversable action.
                  </p>
                  <div>
                    <Button onClick={confirmDeleteNote}>Confirm</Button>
                    <Button onClick={() => setOpenModel(false)} noBackground>
                      Cancel
                    </Button>
                  </div>
                </ModelConfirmation>
              )}
            </StyledNotesContainer>
          </>
        )}
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Note;
