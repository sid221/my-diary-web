import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import { useLocation, useHistory, Prompt } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchNote } from "../../redux/note/noteActions";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";

import ShowError from "../../layout/ShowError";
import { Input, Button } from "../../styles/styledElement";

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
import DiaryNavbar from "../../layout/diaryNavbar";

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
  const { currentNote, noteLoading, noteError } = useSelector(
    (state) => state.note
  );

  const noteMode = query.get("mode");
  console.log("Mode: ", noteMode);
  const noteId = match.params.id;

  const [noteBody, setNoteBody] = useState(null);
  const [noteTitle, setNoteTitle] = useState(null);
  const [noteCreatedDate, setNoteCreatedDate] = useState(null);
  // const [editedNote, setEditedNote] = useState({});
  const [isBlock, setIsBlock] = useState(noteMode === "edit");

  useEffect(() => {
    if (!currentNote) {
      dispatch(fetchNote(noteId));
    }
  }, [currentNote, dispatch, noteId]);

  const handleNoteSave = (e) => {
    e.preventDefault();

    const updatedNote = {
      title: noteTitle,
      body: noteBody,
      createdAt: dayjs(noteCreatedDate).format("MMM DD YYYY"),
    };
    setTimeout(() => {
      setIsBlock(false);
    }, 1000);
    console.log("Note Saved with data: ", updatedNote);

    console.log(isBlock);
  };

  const handleNoteEdit = () => {
    setIsBlock(true);
    setNoteTitle(currentNote.title);
    setNoteBody(currentNote.body);
    setNoteCreatedDate(currentNote.createdAt);
    // setEditedNote(currentNote);
    history.push(`/note/${noteId}?mode=edit`);
    console.log("editNote");
  };

  const handleNoteDelete = () => {
    console.log(currentNote.id);
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
          >
            <i className="fas fa-save"></i>
            <span> Save</span>
          </Button>
        )}
      </StyledDiaryHead>
      <StyledNotesContainer>
        {noteLoading ? (
          <NoteSkeleton />
        ) : !!noteError ? (
          <ShowError error={noteError} />
        ) : !!currentNote ? (
          <StyledNoteBody>
            <StyledNoteTitle>
              <label htmlFor="note-title">
                <h2>Title:</h2>
              </label>
              <Input
                name="note-title"
                defaultValue={currentNote.title}
                placeholder={`Enter your title, Default will be "Memoir of ${dayjs(
                  Date()
                ).format("ddd, DD MMM YYYY")}"`}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
            </StyledNoteTitle>
            <StyledNoteDate>
              <label htmlFor="note-date">
                <h3>Date:</h3>
              </label>
              <div className="datepicker-container">
                <DatePicker
                  value={new Date(noteCreatedDate)}
                  onChange={setNoteCreatedDate}
                  clearIcon={null}
                  format="dd-MMM-y"
                  calendarIcon={<i className="fas fa-calendar-alt" />}
                />
              </div>
            </StyledNoteDate>
            <StyledNoteEditorContainer>
              <ReactQuill
                value={currentNote.body}
                onChange={(val) => setNoteBody(val)}
                placeholder="Write your story here..."
              />
            </StyledNoteEditorContainer>
          </StyledNoteBody>
        ) : (
          <h2>No Such Note Found</h2>
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
                  <Button onClick={handleNoteDelete} noBackground>
                    <i className="fas fa-trash" />
                    <span>{"  "}Delete</span>
                  </Button>
                </>
              )}
            </StyledDiaryHead>
            <StyledNotesContainer>
              {noteLoading ? (
                <NoteSkeleton />
              ) : !!noteError ? (
                <ShowError error={noteError} />
              ) : !!currentNote ? (
                <StyledNoteBody>
                  <h1 className="note-title">{currentNote.title}</h1>
                  <p>
                    <small>
                      {dayjs(currentNote.createdAt).format("dddd, DD MMM YYYY")}
                    </small>
                  </p>
                  <div
                    className="note-content"
                    dangerouslySetInnerHTML={{ __html: currentNote.body }}
                  ></div>
                </StyledNoteBody>
              ) : (
                <h2>No Such Note Found</h2>
              )}
            </StyledNotesContainer>
          </>
        )}
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Note;
