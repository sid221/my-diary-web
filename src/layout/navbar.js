import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../styles/styledElement";
import colors from "../styles/theme";

const StyledNavbar = styled.nav`
  flex-grow: 1;
  height: 4rem;
  padding: 0 2.3rem;
  box-shadow: 5px 7px 10px -6px ${(props) => (props.secondary ? colors.bg1 : colors.bg3)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo-img {
    height: 2rem;
  }
`;

const Navbar = ({ ...props }) => {
  return (
    <StyledNavbar {...props}>
      <Link to="/">
        <img src="/static/images/logo.svg" alt="Memoir" className="logo-img" />
      </Link>
      <Link to="/Login">
        <Button {...props}>Login</Button>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
