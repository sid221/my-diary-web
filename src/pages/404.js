import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { H1, Button } from "../styles/styledElement";
import colors from "../styles/theme"

const StyledPageNotFound = styled.div`
  height: -webkit-fill-available;
  min-height: 100vh;
  width: 100vw;
  background: conic-gradient(
    from -67.98deg at 75.58% 6%,
    #451790 -33.91deg,
    #451790 8.33deg,
    #451791 223.31deg,
    #a198c5 236.34deg,
    rgba(63, 2, 164, 0.45) 302.06deg,
    #451790 304.09deg,
    #451790 302.33deg
  );
  display: flex;
  flex-flow: row;
  > div {
    &:first-child {
      padding-left: 2rem;
      padding-top: 15%;
        z-index: 10;
      width: 40%;
      color: ${colors.bg1};
      p{
      color: ${colors.bg2};

      }
    }
    &:last-child {
      position: relative;
      width: 60%;
      > img {
        position: absolute;
        top: 0;
        right: 2.5%;
        height: 100%;
        /* max-width:100%; */
      }
    }
  }
`;

const PageNotFound = () => {
  let history = useHistory();
  return (
    <StyledPageNotFound>
      <div>
        <h1>Looks like you're lost... </h1>
        <p>The page you are looking for does not exist.</p>
        <br/>
        <Button secondary onClick={() => history.push("/")}>Go to Home</Button>
      </div>
      <div>
        <img src="/static/images/404.svg" alt="" />
      </div>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
