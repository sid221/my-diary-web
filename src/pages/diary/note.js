import React from "react";
import styled from "styled-components";

import {
  StyledDiaryLayout,
  StyledDiaryHead,
  StyledDiaryBody,
  StyledNoteContainer,
  StyledNotesContainer,
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

const Note = ({ match, ...props }) => {
  console.log(props);
  const [note] = !!match.params.id
    ? notes.filter((d) => d.noteId === match.params.id)
    : null;
  console.log(note);

  return (
    <StyledDiaryLayout>
      <DiaryNavbar page="note" />
      <StyledDiaryBody>
        <StyledDiaryHead></StyledDiaryHead>
        {!!match.params && !!match.params.id ? (
          !!note ? (
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
          ) : (
            <div>No Such Note Found</div>
          )
        ) : (
          <div>Add New</div>
        )}
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Note;
