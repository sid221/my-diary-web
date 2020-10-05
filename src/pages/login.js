import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/user/userActions";

import {
  LoginSignupLayout,
  LoginSignupBody,
  TitleContainer,
  FormContainer,
} from "../layout/loginRegisterLayout";

import PulseLoader from "react-spinners/PulseLoader";

import {
  Input,
  InputWithIcon,
  StyledForm,
  Button,
  ImageContainer,
} from "../styles/styledElement";
import colors from "../styles/theme";

const StyledLoginTitle = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Login = () => {
  const loginLoading = useSelector((state) => state.user.loginLoading);
  const dispatch = useDispatch();
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
    dispatch(userLogin(userData, history));
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
              <Button noBackground onClick={() => history.push("/register")}>
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
                defaultValue={email}
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
                defaultValue={password}
                required
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <i className="fa fa-lock input-icon" aria-hidden="true"></i>
            </InputWithIcon>
            <br />
            <Button
              type="submit"
              noBackground={loginLoading}
              disabled={loginLoading}
            >
              {loginLoading ? <PulseLoader color={colors.bg3} /> : "Login"}
            </Button>
          </StyledForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Login;
