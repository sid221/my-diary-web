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

import {
  Input,
  InputWithIcon,
  StyledForm,
  Button,
} from "../styles/styledElement";

const StyledLoginTitle = styled.div`
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
          <StyledForm onSubmit={handleFormSubmit}>
            <h2>Login</h2>
            <InputWithIcon>
              <Input
                type="email"
                name="email"
                value={email}
                required
                placeholder="Email address"
                onChange={(e) => setemail(e.target.value)}
              />
              <i className="fa fa-envelope input-icon" aria-hidden="true"></i>
            </InputWithIcon>

            <InputWithIcon>
              <Input
                type="password"
                name="password"
                value={password}
                required
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <i className="fa fa-lock input-icon" aria-hidden="true"></i>
            </InputWithIcon>
            <br />
            <p>
              <small>
                Don't have an account. <Link to="/register">Click Here</Link> to
                Register
              </small>
            </p>

            <Button type="submit">Login</Button>
          </StyledForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Login;
