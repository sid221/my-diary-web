import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  LoginSignupLayout,
  LoginSignupBody,
  TitleContainer,
  FormContainer,
} from "../layout/loginRegisterLayout";

const StyledLoginTitle = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StyledLoginForm = styled.form`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(userData);
    axios
      .post("http://localhost:3001/api/v2/user/login", userData)
      .then((data) => {
        // const d = data.json();
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <LoginSignupLayout>
      <LoginSignupBody>
        <TitleContainer>
          <StyledLoginTitle>
            <h2>Welcome Back.</h2>
          </StyledLoginTitle>
        </TitleContainer>
        <FormContainer>
          <StyledLoginForm onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <br />
            <p>
              Don't have an account. <Link to="/register">Click Here</Link> to
              Register
            </p>

            <button type="submit">Register</button>
          </StyledLoginForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Login;
