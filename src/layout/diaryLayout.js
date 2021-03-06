import React from "react";
import styled from "styled-components";

import colors from "../styles/theme";
import DiaryNavbar from "./diaryNavbar";

const StyledDiaryLayout = styled.div`
  position: relative;
  padding-left: 12rem;
  height: 100vh;
  min-height: -webkit-fill-available;
  background: ${colors.bg1};
  display: flex;
  /* Notes Styles */
  > div.note-body-container {
    > div.note-head-container {
      > button.note-edit-btn {
        margin-left: auto;
      }
      > button.note-edit-save {
        margin-left: auto;
        /* margin-right: 2rem; */
      }
      > button:last-child {
        margin-right: 2rem;
      }
    }
  }
  // Responsive Diary Nav
  @media only screen and (max-width: 800px) {
    padding-left: 0rem;
  }
`;

const StyledDiaryBody = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
  background: ${colors.bg1};
  border-radius: 20px 0 0 20px;
  box-shadow: inset 0px -4px 12px 3px ${colors.bg2};

  // Responsive Diary Nav
  @media only screen and (max-width: 800px) {
    border-radius: unset;
    box-shadow: unset;
  }
`;

const DiaryLayout = ({ children }) => {
  return (
    <StyledDiaryLayout>
      <DiaryNavbar />
      <StyledDiaryBody>{children}</StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

const DiaryNoteCard = styled.div`
  position: relative;
  height: 200px;
  width: 220px;
  padding: 0.5rem;
  flex-shrink: 0;
  cursor: pointer;
  background: ${(props) => (props.bg ? props.bg : colors.bg1)};
  overflow: hidden;
  border-left: 4px solid
    ${(props) => (props.borderLeft ? props.borderLeft : colors.bg2)};
  border-radius: 4px;
  box-shadow: 3px 1px 7px 2px ${colors.bg2};
  .note-created-date {
    background: ${(props) => (props.dateBg ? props.dateBg : colors.bg2)};
    span.date-text {
      color: ${(props) => (props.dateBg ? props.dateBg : colors.text2)};
    }
    border-radius: 3px;
    width: 8.5rem;
    text-align: center;
  }
  .note-body {
    height: calc(100% - 25px);
    overflow: hidden;
    .note-title {
      font-size: 17.5px;
      margin-bottom: 0.4rem;
    }
  }
  .extend-note {
    position: absolute;
    width: calc(100% - 1.5rem);
    bottom: 0.1rem;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 6px;
    text-align: center;
  }
  &:hover {
    box-shadow: 3px 3px 10px 0px ${colors.bg3};
    border-left: 4px solid ${colors.bg3};
    transform: translateY(-1px);
    transition: transform 300ms ease-in;
  }
`;

const StyledDiaryHead = styled.div`
  height: 4rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0px -6px 12px 4px ${colors.bg2};
  > h1 {
    height: calc(100% - 1.5rem);
    position: relative;
    > img {
      display: block;
      height: 100%;
    }
  }
  > select.notes-month-list {
    margin-left: auto;
    margin-right: 3rem;
  }
  > button.diary-add-btn {
    display: block;
    margin-right: 2rem;
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    color: ${colors.dtext2};
    border: none;
    border-radius: 50%;
    background: ${colors.bg3};
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 10px 2px ${colors.bg2};
    }
    &:focus {
      outline: none;
    }
  }
  & > :nth-child(2) {
    margin-left: auto;
  }
  &.note-head-container {
    & > :nth-child(2) {
      margin-left: 0.5rem;
    }
  }

  // Responsive Diary Nav
  @media only screen and (max-width: 800px) {
    padding-left: 4.5rem;
    z-index: 15;
    > h1 {
      > img {
        display: none;
      }
      &::before {
        content: "";
        position: absolute;
        width: 3rem;
        height: 100%;
        left: 3rem;
        background-image: url("/static/images/brand.svg");
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`;

const StyledNewUser = styled.div`
  height: calc(100% - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > h2 {
    width: 80%;
    font-weight: 500;
    color: ${colors.text2};
  }
  button.createNote {
    height: 37px;
    overflow: hidden;
    align-self: center;
    width: 100%;
    max-width: 15rem;
    padding: 0.26rem 0;
    margin: 1rem 0;
    font-size: 16px;
    border-radius: 20px;
    border: none;
    text-decoration: none;
    color: ${colors.dtext2};
    background: ${colors.bg3};
    > i {
      margin-right: 0.5rem;
      padding: 0.4rem;
    }
    &:focus {
      box-shadow: 0px 0px 10px 0px ${colors.bg3};
      outline: none;
    }
    &:hover {
      box-shadow: 0px 0px 10px 0px ${colors.bg3};
    }
  }
`;

const StyledDiaryNotesContainer = styled.div`
  /* width: 100%; */
  height: calc(100% - 14vh);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`;

// Note Specifiic Style Component

const StyledNotesContainer = styled.div`
  position: relative;
  height: calc(100% - 14vh);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNoteBody = styled.div`
  width: 100%;
  max-width: 740px;
  box-sizing: border-box;
  padding: 1.5rem;
  padding-bottom: 0rem;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  white-space: pre;
  > div.note-content {
    text-align: justify;
  }

  // Responsive Design
  @media only screen and (max-width: 800px) {
    max-width: 650px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  @media only screen and (max-width: 450px) {
    max-width: 450px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const StyledNoteDate = styled.div`
  height: 2.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  max-width: 15rem;
  > label {
    margin-right: 1rem;
  }
  > div.datepicker-container {
    display: flex;
    flex-grow: 1;
    > div {
      flex-grow: 1;
    }
    .react-date-picker__wrapper {
      width: 100%;
      height: 2.2rem;
      padding: 0rem 0.4rem;
      background: #85e0ff;
      border: none;
      border-radius: 5px;
      font-size: 17px;
      & button {
        text-align: center;
        margin: auto 0rem;
        font-size: 17px;
        color: ${colors.bg3};
        border-radius: 50%;
        &:hover {
          background: ${colors.bg1};
        }
      }
    }
  }
`;

const StyledNoteTitle = styled.div`
  display: flex;
  align-items: center;
  > label {
    margin-right: 1rem;
  }
  > input {
    font-size: 17px;
    font-weight: 500;
  }
`;

const StyledNoteEditorContainer = styled.div`
  overflow: hidden;
  flex-grow: 10;
  > div.quill {
    height: calc(100% - 3rem);
  }
`;

export {
  DiaryLayout,
  StyledDiaryLayout,
  StyledDiaryHead,
  StyledDiaryBody,
  StyledNewUser,
  StyledDiaryNotesContainer,
  DiaryNoteCard,
  StyledNotesContainer,
  StyledNoteBody,
  StyledNoteDate,
  StyledNoteTitle,
  StyledNoteEditorContainer,
};
