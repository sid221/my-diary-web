import React from "react";
import styled from "styled-components";

const StyledLoginSignupLayout = styled.div`
  height: 100vh;
  /* height: 100%; */
  background: #fbfffe;
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
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #ADE9FF;
  div {
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

const StyledFormContainer = styled.div``;

const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export { LoginSignupLayout, LoginSignupBody, TitleContainer, FormContainer };
