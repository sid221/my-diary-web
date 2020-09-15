import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { HomeLayout } from "../layout/homeLayout";
import { Button, H1, P } from "../styles/styledElement";

const HeroSection = styled.section`
  height: 100%;
  display: flex;
  flex-flow: row;
`;

const InfoContainer = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  > h1 {
    position: absolute;
    top: 3rem;
    left: 0;
    width: 121%;
    max-width: 25rem;
  }
`;
const IllustrationContainer = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 105%;
    position: absolute;
    left: 1rem;
    transform: rotate3d(0, 1, 0, 180deg);
  }
`;

const Home = () => {
  let history = useHistory();
  return (
    <HomeLayout>
      <HeroSection>
        <InfoContainer>
          <H1>Write and save your amazing stories...</H1>
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
          <img src="/static/images/personal_note.svg" />
        </IllustrationContainer>
      </HeroSection>
    </HomeLayout>
  );
};

export default Home;
