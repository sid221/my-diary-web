import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  LoginSignupLayout,
  LoginSignupBody,
  TitleContainer,
  FormContainer,
} from "../layout/loginRegisterLayout";
import {
  Input,
  InputWithIcon,
  Button,
  StyledForm,
  Select,
  Option,
  P,
} from "../styles/styledElement";

const StyledRegisterTitle = styled.div``;

const Register = () => {
  const [userName, setuserName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [gender, setgender] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      email,
      password,
      confirmPassword,
      gender,
    };
    console.log(userData);
    axios
      .post("http://localhost:3001/api/v2/user/register", userData)
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
          <StyledRegisterTitle>
            <h2>Register to get started with your personal E-Diary.</h2>
            <div>
              Already have an account.{" "}
              <Link to="/login">
                <Button noBackground>Click Here</Button>
              </Link>
            </div>
          </StyledRegisterTitle>
        </TitleContainer>
        <FormContainer>
          <StyledForm onSubmit={handleFormSubmit}>
            <h2>Register</h2>
            <InputWithIcon>
              <Input
                type="text"
                name="userName"
                value={userName}
                required
                autoComplete="off"
                placeholder="Name."
                onChange={(e) => setuserName(e.target.value)}
              />
              <i className="fa fa-user input-icon" aria-hidden="true"></i>
            </InputWithIcon>
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
            <InputWithIcon>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
                placeholder="Confirm password"
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
              <i className="fa fa-lock input-icon" aria-hidden="true"></i>
            </InputWithIcon>
            <Select
              name="Gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <Option disabled selected hidden>
                &#xf228; Gender
              </Option>
              <Option value="male">&#xf183; Male</Option>
              <Option value="female">&#xf182; Female</Option>
              <Option value="other">&#xf225; Other</Option>
            </Select>

            <Button type="submit">Register</Button>
          </StyledForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Register;
