import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Prompt, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../../redux/note/noteActions";

import DatePicker from "react-date-picker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import DiaryNavbar from "../../layout/diaryNavbar";
import ShowError from "../../layout/ShowError";
import PulseLoader from "react-spinners/PulseLoader";
import colors from "../../styles/theme";
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

const CreateNote = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { createNoteLoading, newNoteData, createNoteError } = useSelector(
    (state) => state.note
  );
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDate, setNoteDate] = useState(new Date());
  const [noteBody, setNoteBody] = useState(null);
  const [noteStyle, setNoteStyle] = useState({});
  const [isBlock, setIsBlock] = useState(true);

  useEffect(() => {
    if (!!newNoteData && !createNoteLoading) setIsBlock(false);
  }, [newNoteData, setIsBlock, createNoteLoading]);

  const handleNoteSave = (e) => {
    let noteData = {
      title:
        noteTitle || `Memoir of ${dayjs(Date()).format("ddd, DD MMM YYYY")}`,
      body: noteBody,
      createdAt: dayjs(noteDate).format("DD MMM YYYY"),
      styles: noteStyle || {},
    };

    // console.log(noteData);
    // console.log(history);
    setIsBlock(false);
    dispatch(createNote(noteData, history));
  };

  const handleSetStyle = () => {
    // let style = {
    //   bg:
    //   borderLeft:
    //   dateBg:
    // }
    setNoteStyle({});
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
            disabled={createNoteLoading}
          >
            {createNoteLoading ? (
              <PulseLoader color={colors.bg3} />
            ) : (
              <>
                <i className="fas fa-save" />
                <span> Save</span>
              </>
            )}
          </Button>
        </StyledDiaryHead>
        <StyledNotesContainer>
          {!!createNoteError && <ShowError error={createNoteError} />}
          <StyledNoteBody>
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
              <label htmlFor="noteDate">
                <h3>Date:</h3>
              </label>
              <div className="datepicker-container">
                <DatePicker
                  name="noteDate"
                  value={noteDate}
                  onChange={setNoteDate}
                  format="dd-MM-y"
                  clearIcon={null}
                  calendarIcon={<i className="fas fa-calendar-alt" />}
                />
              </div>
            </StyledNoteDate>
            <StyledNoteEditorContainer>
              <ReactQuill
                value={noteBody}
                theme="snow"
                onChange={(val) => setNoteBody(val)}
                placeholder="Write your story here..."
              />
            </StyledNoteEditorContainer>
          </StyledNoteBody>
        </StyledNotesContainer>
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default CreateNote;
