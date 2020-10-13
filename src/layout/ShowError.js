import React, { useState } from "react";
import styled from "styled-components";

import colors from "../styles/theme";

const StyledErrorContainer = styled.div`
  &[data-show="false"] {
    display: none;
  }
  position: absolute;
  width: calc(100vw - 14rem);
  > div.error-body {
    position: absolute;
    background: ${colors.bg2};
    padding-left: 0.5rem;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px ${colors.text2};
    top: 3rem;
    right: 3rem;
    min-width: 17rem;
    height: 2.5rem;
    white-space: nowrap;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    .error-text {
      font-weight: 400;
      margin-right: 0.5rem;
    }
    .close-error {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        height: 1.3rem;
        margin: auto 1rem;
        cursor: pointer;
      }
    }
  }
`;

const ShowError = ({ error }) => {
  const [showErr, setShowErr] = useState(true);
  const handleClose = () => {
    console.log("close clicked");
    setShowErr(false);
  };
  const { message, response } = error;
  return (
    <StyledErrorContainer data-show={showErr}>
      <div className="error-body">
        <div className="error-text">
          {!response
            ? (message ?? "Something went wrong!")
            : response.data.error === "auth/id-token-expired"
            ? "Auth Error! Please Logout and Login again!"
            : response.data.error}
        </div>
        <div className="close-error">
          <img onClick={handleClose} src="/static/images/close.svg" alt="x" />
        </div>
      </div>
    </StyledErrorContainer>
  );
};

export default ShowError;
