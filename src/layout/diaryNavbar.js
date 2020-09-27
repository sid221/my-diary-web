import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../styles/theme";

const StyledDiaryNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 12rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  .homeLink {
    width: 100%;
    height: 37px;
    margin-top: 1rem;
    margin-bottom: 30%;
    > img {
      width: 90%;
      display: block;
      margin: auto;
    }
  }
  a.diaryNavLink {
    width: 100%;
    margin-left: 0rem;
    padding: 0.5rem 0;
    text-decoration: none;
    text-align: center;
    color: ${colors.text2};
    border-radius: 5px 0 0 5px;
    box-shadow: -5px 2px 9px 0px ${colors.bg3};
    margin-bottom: 0.7rem;
    color: ${colors.text1};
    &:hover {
      background: ${colors.bg3};
      color: ${colors.dtext2};
    }
  }
  a.createNote {
    width: 100%;
    margin-left: 0rem;
    text-decoration: none;
    text-align: center;
    color: ${colors.dtext2};
    border-radius: 20px;
    background: ${colors.bg3};
    padding: 0.26rem 0;
    margin-bottom: 132%;
    > i {
      margin-right: 0.5rem;
      padding: 0.4rem;
    }
    &:hover {
      box-shadow: 0px 2px 9px -6px ${colors.bg2};
    }
  }
  > button {
    width: 100%;
    height: 37px;
    overflow: hidden;
    margin-top: 3rem;
    padding: 0.2rem 0;
    border: none;
    border-radius: 5px;
    background: ${colors.bg3};
    box-shadow: 0px 2px 9px -6px ${colors.bg2};
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    color: ${colors.dtext2};
    &:focus {
      outline: none;
    }
    > i {
      margin-right: 0.25rem;
      padding: 0.46rem;
    }
  }
`;

const DiaryNavbar = () => {
  return (
    <StyledDiaryNav>
      <Link to="/" className="homeLink">
        <img src="/static/images/logo.svg" alt="Memoir" />
      </Link>
      <Link to="/create-note" title="Create A New Note." className="createNote">
        <i className="fas fa-plus" />
        <span>Add Note</span>
      </Link>
      <Link to="/diary" className="diaryNavLink">
        Diary
      </Link>
      <Link to="/" className="diaryNavLink">
        Home
      </Link>
      <Link to="/profile" className="diaryNavLink">
        Profile
      </Link>
      <button>
        <i className="fas fa-sign-out-alt" />
        <span>Logout</span>
      </button>
    </StyledDiaryNav>
  );
};

export default DiaryNavbar;
