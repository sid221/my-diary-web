import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import colors from "../styles/theme";

const StyledHomeLayout = styled.div`
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background: ${colors.bg1};
  
`;
const BodyContainer = styled.div`
  height: calc(100% - 4.5rem);
  padding: 0 5rem;
`;

const HomeLayout = ({ children }) => {
  return (
    <StyledHomeLayout>
      <Navbar />
      <BodyContainer>{children}</BodyContainer>
    </StyledHomeLayout>
  );
};

export { HomeLayout };
