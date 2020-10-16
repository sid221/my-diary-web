import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../redux/user/userActions";

import PulseLoader from "react-spinners/PulseLoader";
import {
  StyledLoginSignupLayout,
  StyledBodyContainer,
  StyledTitleContainer,
  StyledFormContainer,
} from "../layout/loginRegisterLayout";
import Navbar from "../layout/navbar";
import ModelConfirmation from "../layout/ModelConfirmation";

import {
  Input,
  InputWithIcon,
  Button,
  StyledForm,
  Select,
  Option,
  ImageContainer,
} from "../styles/styledElement";
import colors from "../styles/theme";

const StyledRegisterTitle = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const registerLoading = useSelector((state) => state.user.registerLoading);

  const [userName, setuserName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [gender, setgender] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [openModel, setOpenModel] = useState(false);

  const confirmRegister = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      email,
      password,
      confirmPassword,
      gender,
    };
    setOpenModel(false);
    console.log(userData);
    dispatch(userRegister(userData, history));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOpenModel(true);
  };

  return (
    <StyledLoginSignupLayout>
      <Navbar secondary />
      <div className="body-container">
        <StyledBodyContainer>
          <StyledTitleContainer>
            <StyledRegisterTitle>
              <h2>Get started with your personal E-Diary.</h2>
              <ImageContainer>
                <img
                  src="/static/images/register.svg"
                  className="register-img"
                  alt=""
                />
              </ImageContainer>
              <div>
                <span>Already have an account? </span>
                <Button noBackground onClick={() => history.push("/login")}>
                  Login
                </Button>
              </div>
            </StyledRegisterTitle>
          </StyledTitleContainer>
          <StyledFormContainer>
            <StyledForm onSubmit={handleFormSubmit}>
              <h2>Register</h2>
              <InputWithIcon>
                <Input
                  type="text"
                  name="userName"
                  defaultValue={userName}
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
              <InputWithIcon>
                <Input
                  type="password"
                  name="confirmPassword"
                  defaultValue={confirmPassword}
                  required
                  placeholder="Confirm password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                <i className="fa fa-lock input-icon" aria-hidden="true"></i>
              </InputWithIcon>
              <Select
                name="Gender"
                value={gender}
                defaultValue=""
                onChange={(e) => setgender(e.target.value)}
              >
                <Option disabled value="" hidden>
                  &#xf228; Gender
                </Option>
                <Option value="male">&#xf183; Male</Option>
                <Option value="female">&#xf182; Female</Option>
                <Option value="other">&#xf225; Other</Option>
              </Select>
              <br />
              <Button
                type="submit"
                noBackground={registerLoading}
                disabled={registerLoading}
              >
                {registerLoading ? (
                  <PulseLoader color={colors.bg3} />
                ) : (
                  "Register"
                )}
              </Button>
            </StyledForm>
          </StyledFormContainer>
        </StyledBodyContainer>
      </div>
      {openModel && (
        <ModelConfirmation>
          <p>
            Are you sure that you want to register with the entered details. Be
            sure to check your password and remember it, because we don't have
            password reset option as of now!
          </p>
          <div>
            <Button onClick={confirmRegister}>Confirm</Button>
            <Button onClick={() => setOpenModel(false)} noBackground>
              Cancel
            </Button>
          </div>
        </ModelConfirmation>
      )}
    </StyledLoginSignupLayout>
  );
};

export default Register;
