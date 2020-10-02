import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import DiaryNavbar from "../layout/diaryNavbar";
import { StyledDiaryLayout, StyledDiaryBody } from "../layout/diaryLayout";
import colors from "../styles/theme";
import { Input, Button } from "../styles/styledElement";

const StyledProfileContainer = styled.div`
  position: relative;
  height: 20rem;
  width: 25rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px ${colors.bg2};
  > div.user-img {
    margin-top: -4rem;
    margin-bottom: 2rem;
    height: 8rem;
    align-self: center;
    img {
      margin: auto;
      height: 100%;
    }
  }
  > button.edit-profile-btn {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

const StyledProfileData = styled.div`
  padding: 0.2rem 3rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  flex-flow: row;
  align-items: center;

  > :first-child {
    width: 4.5rem;
    margin: 0;
    font-size: 15px;
    color: ${colors.text2};
  }
  > :last-child {
    margin: 0;
    font-weight: 400;
    font-size: 15px;
    color: ${colors.text1};
  }
`;
const Profile = () => {
  const profile = {
    createdAt: "2020-09-02T14:41:07.746Z",
    userName: "user",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/my-diary-26246.appspot.com/o/no-image-male.png?alt=media",
    email: "user@email.com",
    gender: "male",
  };
  const [editProfile, setEditProfile] = useState(false);
  const [userName, setUserName] = useState(
    !!profile.userName ? profile.userName : ""
  );
  const handleSaveProfile = () => {
    console.log(userName);

    setEditProfile(false);
  };
  return (
    <StyledDiaryLayout>
      <DiaryNavbar />
      <StyledDiaryBody>
        <StyledProfileContainer>
          <div className="user-img">
            <img src={profile.imageUrl} alt="user" />
          </div>
          <div className="user-data">
            <StyledProfileData>
              <p>Name:</p>
              {!editProfile ? (
                <h3>{profile.userName}</h3>
              ) : (
                <Input
                  value={userName}
                  placeholder="Enter name..."
                  onChange={(e) => setUserName(e.target.value)}
                />
              )}
            </StyledProfileData>
            <StyledProfileData>
              <p>Gender:</p>
              <h3>{profile.gender}</h3>
            </StyledProfileData>
            <StyledProfileData>
              <p>Email:</p>
              <h3>{profile.email}</h3>
            </StyledProfileData>
            <StyledProfileData>
              <p>Joind at:</p>
              <h3>{dayjs(profile.createdAt).format("ddd, DD MMMM YYYY")}</h3>
            </StyledProfileData>
          </div>
          {!editProfile ? (
            <Button
              noBackground
              secondary
              title="Edit profile detail"
              className="edit-profile-btn"
              onClick={() => setEditProfile(true)}
            >
              <i className="fas fa-pencil-alt" />
            </Button>
          ) : (
            <Button
              noBackground
              secondary
              title="Edit profile detail"
              className="edit-profile-btn"
              onClick={handleSaveProfile}
            >
              <i className="fas fa-save" />
            </Button>
          )}
        </StyledProfileContainer>
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Profile;
