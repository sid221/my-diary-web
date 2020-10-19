import React from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userLogout } from "../redux/user/userActions";

import colors from "../styles/theme";
import { Button } from "../styles/styledElement";

const StyledDiaryNav = styled.nav`
  user-select: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 12rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: ${colors.bg1};
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
    box-shadow: -2px 1px 7px -3px ${colors.bg3};
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
    border: none;
    &:last-child {
      margin-top: auto;
      margin-bottom: 2rem;
    }
    &.create-note-btn {
      margin-bottom: auto;
      margin-top: 0rem;
      &[data-hide="true"] {
        visibility: hidden;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    > a.homeLink {
      display: none;
    }
  }
`;
const StyledSpan = styled.span`
  #mobile-menu,
  .mobile-menu-label {
    display: none;
  }

  #mobile-menu:checked ~ {
    .diary-menu {
      display: flex;
      padding-top: 1rem;
      margin-top: 4.05rem;
      z-index: 2;
      height: calc(100% - 4.9rem);
      box-shadow: 0px 0px 16px 3px ${colors.bg2};
      animation: display 300ms ease;
    }
    .mobile-menu-label {
      background-color: ${colors.bg2};
    }
  }

  @media only screen and (max-width: 800px) {
    position: absolute;
    .diary-menu {
      display: none;
    }
    .mobile-menu-label {
      position: absolute;
      z-index: 20;
      font-size: 20px;
      font-size: 2rem;
      left: 3rem;
      height: 4rem;
      width: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        padding: 0.2rem;
        color: ${colors.text2};
      }
      &:hover {
        background-color: ${colors.bg2};
      }
    }
  }
`;

const DiaryNavbar = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();
  const logout = () => {
    dispatch(userLogout(history));
  };
  return (
    <StyledSpan>
      <input type="checkbox" id="mobile-menu" />
      <label htmlFor="mobile-menu" className="mobile-menu-label">
        <i className="fas fa-bars" />
      </label>
      <StyledDiaryNav className="diary-menu">
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
        <Button noBackground onClick={logout}>
          <i className="fas fa-sign-out-alt" />
          <span> Logout</span>
        </Button>
      </StyledDiaryNav>
    </StyledSpan>
  );
};

export default DiaryNavbar;
