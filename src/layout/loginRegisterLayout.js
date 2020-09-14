import React from "react";
import styled from "styled-components";

import colors from "../styles/theme";

const StyledLoginSignupLayout = styled.div`
  height: 100vh;
  background: linear-gradient(
    90deg,
    ${colors.bg3} 0%,
    ${colors.bg3} 50%,
    ${colors.bg2} 50%,
    ${colors.bg2} 100%
  );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSignupLayout = ({ children }) => {
  return <StyledLoginSignupLayout>{children}</StyledLoginSignupLayout>;
};

const StyledBodyContainer = styled.div`
  height: 30rem;
  width: 40rem;
  min-width: 510px;
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
`;

const LoginSignupBody = ({ children }) => {
  return <StyledBodyContainer>{children}</StyledBodyContainer>;
};

const StyledTitleContainer = styled.div``;

const TitleContainer = ({ children }) => {
  return <StyledTitleContainer>{children}</StyledTitleContainer>;
};

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export { LoginSignupLayout, LoginSignupBody, TitleContainer, FormContainer };
