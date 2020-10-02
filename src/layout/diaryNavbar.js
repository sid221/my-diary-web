import React from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import colors from "../styles/theme";
import { Button } from "../styles/styledElement";

const StyledDiaryNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 12rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  > a.homeLink {
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
  > a.diaryNavLink {
    width: 100%;
    margin-left: 0rem;
    padding: 0.5rem 0;
    text-decoration: none;
    text-align: center;
    border-radius: 5px 0 0 5px;
    box-shadow: -5px 2px 9px 0px ${colors.bg3};
    margin-bottom: 0.7rem;
    color: ${colors.bg3};
    &:hover {
      background: ${colors.bg3};
      color: ${colors.bg2};
    }

    &[data-active="true"] {
      border-right: 5px solid ${colors.bg3};
      width: calc(100% - 5px);
    }
  }
  > button {
    width: 100%;
    overflow: hidden;
    height: 37px;
    &:last-child {
      margin-top: auto;
      margin-bottom: 2rem;
    }
    &.create-note-btn {
      margin-bottom: auto;
      margin-top: 0rem;
      &[data-hide="true"] {
        visibility:hidden;
      }
    }
  }
`;

const DiaryNavbar = () => {
  let location = useLocation();
  const history = useHistory();
  return (
    <StyledDiaryNav>
      <Link to="/" className="homeLink">
        <img src="/static/images/logo.svg" alt="Memoir" />
      </Link>
      <Button
        disabled={location.pathname === "/diary/createNote"}
        data-hide={location.pathname === "/diary/createNote"}
        onClick={() => history.push("/diary/createNote")}
        title="Create A New Note."
        className="create-note-btn"
        noBackground
      >
        <i className="fas fa-plus" />
        <span> Add Note</span>
      </Button>
      <Link
        to="/diary"
        className="diaryNavLink"
        data-active={location.pathname === "/diary"}
      >
        <i className="fas fa-book"></i>
        <span> Diary</span>
      </Link>
      <Link
        to="/"
        className="diaryNavLink"
        data-active={location.pathname === "/"}
      >
        <i className="fas fa-home"></i>
        <span> Home</span>
      </Link>
      <Link
        to="/profile"
        className="diaryNavLink"
        data-active={location.pathname === "/profile"}
      >
        <i className="fas fa-user"></i>

        <span> Profile</span>
      </Link>
      <Button noBackground>
        <i className="fas fa-sign-out-alt" />
        <span> Logout</span>
      </Button>
    </StyledDiaryNav>
  );
};

export default DiaryNavbar;
