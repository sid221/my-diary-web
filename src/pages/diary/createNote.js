import React, { useState } from "react";
import dayjs from "dayjs";
import { useHistory, Prompt } from "react-router-dom";

import DatePicker from "react-date-picker";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";

import DiaryNavbar from "../../layout/diaryNavbar";
import { Input, Button } from "../../styles/styledElement";
import {
  StyledDiaryLayout,
  StyledDiaryHead,
  StyledDiaryBody,
  StyledNotesContainer,
  StyledNoteTitle,
  StyledNoteDate,
  StyledNoteEditorContainer,
} from "../../layout/diaryLayout";

const CreateNote = () => {
//   const history = useHistory();
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDate, setNoteDate] = useState(new Date());
  const [isBlock, setIsBlock] = useState(true);

  const handleNoteSave = (e) => {
    // e.preventDefault();
    console.log("dfgdkgjko");
    const updatedNote = {
      title: noteTitle,
      body: noteBody,
      createdAt: noteDate,
    };
    console.log(isBlock);
    setTimeout(() => {
      setIsBlock(false);
    }, 1000);
    console.log("Note Saved with data: ", updatedNote);

    // history.push(`/note/${note.noteId}`);
  };

  return (
    <StyledDiaryLayout>
      <DiaryNavbar page="note" />
      <Prompt
        when={isBlock}
        message={(location) =>
          `Are you sure you want to go to ${location.pathname}, your current data would not be saved!`
        }
      />
      <StyledDiaryBody className="note-body-container">
        <StyledDiaryHead className="note-head-container">
          <Button
            onClick={handleNoteSave}
            noBackground
            className="note-edit-save"
          >
            <i className="fas fa-save" />
            <span> Save</span>
          </Button>
        </StyledDiaryHead>
        <StyledNotesContainer>
          <StyledNoteTitle>
            <label htmlFor="note-title">
              <h2>Title:</h2>
            </label>
            <Input
              name="note-title"
              value={noteTitle}
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
                value={noteDate}
                onChange={setNoteDate}
                clearIcon={null}
                calendarIcon={<i className="fas fa-calendar-alt" />}
              />
            </div>
          </StyledNoteDate>
          <StyledNoteEditorContainer>
            <ReactQuill
              value={noteBody}
              onChange={(val) => setNoteBody(val)}
              placeholder="Write your story here..."
            />
          </StyledNoteEditorContainer>
        </StyledNotesContainer>
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default CreateNote;
