import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import { useLocation, useHistory, Prompt } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";

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
import DiaryNavbar from "../../layout/diaryNavbar";

var notes = [
  {
    noteId: "Osif2gXpdWylDiBLaofX",
    createdAt: "Sep 10 2020",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    style: { bg: "skyblue" },
  },
  {
    noteId: "jubT58Jsfey11s6ORIIO",
    createdAt: "Sep 07 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "C6gc9uB5q1jjLqgtJRzZ",
    createdAt: "Sep 05 2020",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "jUDAYCro0tw0BSsAR1kG",
    createdAt: "Sep 03 2020",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "lCgknVQwkcbk3QxY30bV",
    createdAt: "Sep 01 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "hxqrhEh4hfGnVdGo96aP",
    createdAt: "Mar 25 2015",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "What is Lorem Ipsum?",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
  },
  {
    noteId: "HXONW66nI0wY4sTHDuqE",
    createdAt: "Mar 21 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "4OczUCbdI2O2JZrjhafk",
    createdAt: "Apr 20 2020",
    title: "What is Lorem Ipsum?",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "kavPgHEfJiOikkLNfG9H",
    createdAt: "Sep 03 2020",
    title: "posted 2ndnote",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    body: "new2 post from client side",
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Note = ({ match, ...props }) => {
  const history = useHistory();
  const query = useQuery();
  const noteMode = query.get("mode");
  const [note] = !!match.params.id
    ? notes.filter((d) => d.noteId === match.params.id)
    : [null];

  const [noteBody, setNoteBody] = useState(
    noteMode == "edit" && !!note ? note.body : ""
  );
  const [noteTitle, setNoteTitle] = useState(
    noteMode == "edit" && !!note ? note.title : ""
  );
  const [noteCreatedDate, setNoteCreatedDate] = useState(
    noteMode == "edit" && !!note ? note.createdAt : ""
  );
  const [isBlock, setIsBlock] = useState(
    noteMode === "edit" && !!note ? true : false
  );

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
    setNoteTitle(note.title);
    setNoteBody(note.body);
    setNoteCreatedDate(note.createdAt);
    setIsBlock(true);
    history.push(`/note/${match.params.id}?mode=edit`);
  };
  const handleNoteDelete = () => {
    console.log(note.id);
  };

  if (noteMode === "edit" && !!note) {
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
              <i className="fas fa-save"></i>
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
                  value={new Date(noteCreatedDate)}
                  onChange={setNoteCreatedDate}
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
  }

  return (
    <StyledDiaryLayout>
      <DiaryNavbar page="note" />
      <StyledDiaryBody className="note-body-container">
        {!!note ? (
          <>
            <StyledDiaryHead className="note-head-container">
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
            </StyledDiaryHead>
            <StyledNotesContainer className="note-page">
              <h1 className="note-title">{note.title}</h1>
              <p>
                <small>{note.createdAt}</small>
              </p>
              <div
                className="note-content"
                dangerouslySetInnerHTML={{ __html: note.body }}
              ></div>
            </StyledNotesContainer>
          </>
        ) : (
          <>
            <StyledDiaryHead />
            <div>No Such Note Found</div>
          </>
        )}
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Note;
