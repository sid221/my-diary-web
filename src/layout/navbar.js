import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../styles/styledElement";
import colors from "../styles/theme";

const StyledNavbar = styled.nav`
  flex-grow: 1;
  height: 4rem;
  padding: 0 2.3rem;
  box-shadow: inset 0px -6px 5px -4px ${colors.bg2};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo-img {
    height: 2rem;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <img src="/static/images/logo.svg" alt="Memoir" className="logo-img" />
      </Link>
      <Link to="/Login">
        <Button>Login</Button>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
