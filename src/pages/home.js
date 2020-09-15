import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { HomeLayout } from "../layout/homeLayout";
import { Button, H1, P } from "../styles/styledElement";

const HeroSection = styled.section`
  height: 100%;
  display: flex;
  flex-flow: row;
  > div {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    flex-flow: column-reverse;
    height: unset;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    > div {
      width: 100%;
    }
  }
`;

const InfoContainer = styled.div`
  max-width: 28rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    text-align: center;
    padding-bottom: 1.5rem;
    > h1 {
      margin-bottom: 0.5rem;
    }
  }
`;
const IllustrationContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 115%;
    position: absolute;
    left: 1rem;
    transform: rotate3d(0, 1, 0, 180deg);
  }
  @media only screen and (max-width: 600px) {
    > img {
      position: relative;
      width: 100%;
      transform: none;
    }
  }
`;

const Home = () => {
  let history = useHistory();
  return (
    <HomeLayout>
      <HeroSection>
        <InfoContainer>
          <H1>Write and save your amazing everyday stories...</H1>
          <P>
            Now you never have to worry about forgetting a feeling, a moment or
            an adventure again. Write everything in your personal E-Diary which
            you can acceess anywhere anytime from any smart device.
          </P>
          <br />
          <br />
          <Button onClick={() => history.push("/register")}>Get Started</Button>
        </InfoContainer>
        <IllustrationContainer>
          <img src="/static/images/personal_note.svg" alt="" />
        </IllustrationContainer>
      </HeroSection>
    </HomeLayout>
  );
};

export default Home;
