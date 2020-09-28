import React from "react";
import styled from "styled-components";

import DiaryNavbar from "../layout/diaryNavbar";
import colors from "../styles/theme";

const StyledProfileLayout = styled.div`
  padding-left: 12rem;
`;
const StyledProfileContainer = styled.div`
  background: ${colors.bg1};
`;

const Profile = () => {
  const profile = {
    createdAt: "2020-09-02T14:41:07.746Z",
    userName: "user",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/undefined/o/EJJgMWkx8pQc09v04vM5USUhrJ82-1599716484262.png?alt=media",
    email: "user@email.com",
  };
  return (
    <StyledProfileLayout>
      <DiaryNavbar />
      <StyledProfileContainer>
        <h1>Profile</h1>
      </StyledProfileContainer>
    </StyledProfileLayout>
  );
};

export default Profile;
