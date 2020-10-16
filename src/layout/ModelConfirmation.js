import React from "react";
import styled from "styled-components";
import colors from "../styles/theme";

const StyledModel = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: #ff0000c4;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  > div {
    background: ${colors.bg2};
    border-radius: 10px;
    padding: 1.5rem;
    /* height: 200px; */
    width: 300px;
    > p {
      border-radius: 10px;
      background: ${colors.bg1};
      padding: 1rem;
      margin-top: 0;
    }
    > div {
      width: 100%;
      > button {
        &:first-child {
          margin-left: 35%;
        }
      }
    }
  }
`;

const ModelConfirmation = ({ children }) => {
  return (
    <StyledModel>
      <div>{children}</div>
    </StyledModel>
  );
};

export default ModelConfirmation;
