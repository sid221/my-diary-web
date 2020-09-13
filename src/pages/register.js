import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  LoginSignupLayout,
  LoginSignupBody,
  TitleContainer,
  FormContainer,
} from "../layout/loginRegisterLayout";

const StyledRegisterTitle = styled.div``;
const StyledRegisterForm = styled.form`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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
          <StyledRegisterTitle>Title</StyledRegisterTitle>
        </TitleContainer>
        <FormContainer>
          <StyledRegisterForm onSubmit={handleFormSubmit}>
            <h2>Register</h2>
            <input
              type="text"
              name="userName"
              value={userName}
              required
              onChange={(e) => setuserName(e.target.value)}
            />
            <br />
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
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="gender"
              value={gender}
              required
              onChange={(e) => setgender(e.target.value)}
            />
            <br />

            <p>
              Already have an account. <Link to="/login">Click Here</Link> to
              Login
            </p>

            <button type="submit">Register</button>
          </StyledRegisterForm>
        </FormContainer>
      </LoginSignupBody>
    </LoginSignupLayout>
  );
};

export default Register;
