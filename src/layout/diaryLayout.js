import React from "react";
import styled from "styled-components";

import colors from "../styles/theme";
import DiaryNavbar from "./diaryNavbar";

const StyledDiaryContainer = styled.div`
  position: relative;
  padding-left: 12rem;
  height: 100vh;
  min-height: -webkit-fill-available;
  background: ${colors.dbg1};
  display: flex;
`;
const DiaryBody = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
  background: ${colors.dbg};
  border-radius: 20px 0 0 20px;
`;

const DiaryLayout = ({ children }) => {
  return (
    <StyledDiaryContainer>
      <DiaryNavbar />
      <DiaryBody>{children}</DiaryBody>
    </StyledDiaryContainer>
  );
};

const DiaryNoteCard = styled.div`
  position: relative;
  height: 200px;
  width: 220px;
  padding: 0.5rem;
  flex-shrink: 0;
  background: ${colors.dtext2};
  overflow: hidden;
  border-left: 4px solid ${colors.dtext3};
  border-radius: 4px;
  .note-created-date {
    background: darkcyan;
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
    box-shadow: 3px 3px 7px -1px ${colors.dtext1};
  }
`;

const StyledDiaryHead = styled.div`
  height: 4rem;
  padding-left: 10rem;
  display: flex;
  align-items: center;
  box-shadow: 0px -6px 12px 4px ${colors.bg2};
  > h1 {
    height: calc(100% - 1.5rem);
    > img {
      display: block;
      height: 100%;
    }
  }
  > button {
    display: block;
    margin-left: auto;
    margin-right: 1rem;
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    color: ${colors.dtext2};
    border: none;
    border-radius: 50%;
    background: ${colors.bg3};
    &:hover {
      box-shadow: 0px 0px 10px 2px ${colors.bg2};
    }
    &:focus {
      outline: none;
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
    color: ${colors.dtext2};
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
      outline: none;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 2px 9px -6px ${colors.bg2};
    }
  }
`;

export { DiaryLayout, DiaryNoteCard, StyledDiaryHead, StyledNewUser };
