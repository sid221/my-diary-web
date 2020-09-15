import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  ImageContainer,
} from "../styles/styledElement";

const StyledLoginTitle = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Login = () => {
  const history = useHistory();
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
            <ImageContainer>
              <img
                src="/static/images/login.png"
                className="login-img"
                alt=""
              />
            </ImageContainer>
            <div>
              Don't have an account?{"   "}
              <Button
                noBackground
                onClick={() => history.push("/register")}
              >
                Register
              </Button>
            </div>
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
            <Button type="submit">Login</Button>
          </StyledForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Login;
