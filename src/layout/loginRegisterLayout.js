import React from "react";
import styled from "styled-components";

import colors from "../styles/theme";
import Navbar from "./navbar";

const StyledLoginSignupLayout = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${colors.bg3} 0%,
    ${colors.bg3} 50%,
    ${colors.bg2} 50%,
    ${colors.bg2} 100%
  );
  .body-container {
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  @media only screen and (max-width: 600px) {
    background: linear-gradient(180deg, #0e34a0 0%, #85e0ff 100%);
  }
`;

const LoginSignupLayout = ({ children }) => {
  return (
    <StyledLoginSignupLayout>
      <Navbar secondary />
      <div className="body-container">{children}</div>
    </StyledLoginSignupLayout>
  );
};

const StyledBodyContainer = styled.div`
  height: 30rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${colors.bg1};
  opacity: 0.75;
  border-radius: 1.2rem;
  > div {
    width: 50%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    flex-flow: column;
    width: 20rem;
    height: unset;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    > div {
      width: 100%;
      height: 100%;
    }
  }
`;

const LoginSignupBody = ({ children }) => {
  return <StyledBodyContainer>{children}</StyledBodyContainer>;
};

const StyledTitleContainer = styled.div`
  @media only screen and (max-width: 600px) {
    border-bottom: 1px solid ${colors.text2};
  }
`;

const TitleContainer = ({ children }) => {
  return <StyledTitleContainer>{children}</StyledTitleContainer>;
};

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  > h1,
  h2 {
    margin-block-start: 0;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 1rem;
  }
`;

const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export { LoginSignupLayout, LoginSignupBody, TitleContainer, FormContainer };
