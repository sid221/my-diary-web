import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/user/userActions";

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
  > a {
    margin-right: auto;
  }
`;

const Navbar = ({ ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.token || !!token ? true : false
  );

  const handleLogout = () => {
    setAuthenticated(false);
    dispatch(userLogout());
  };

  return (
    <StyledNavbar {...props}>
      <Link to="/">
        <img src="/static/images/logo.svg" alt="Memoir" className="logo-img" />
      </Link>

      <Button
        {...props}
        onClick={() =>
          authenticated ? history.push("/diary") : history.push("/login")
        }
      >
        {authenticated ? (
          <>
            <i className="fas fa-book" />
            <span> Diary</span>
          </>
        ) : (
          "Login"
        )}
      </Button>
      {authenticated && (
        <Button {...props} onClick={handleLogout}>
          <i className="fas fa-sign-out-alt" />
          <span> Logout</span>
        </Button>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
