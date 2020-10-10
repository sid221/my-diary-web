import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser, updateUserProfile } from "../redux/user/userActions";

import PulseLoader from "react-spinners/PulseLoader";
import DiaryNavbar from "../layout/diaryNavbar";
import { StyledDiaryLayout, StyledDiaryBody } from "../layout/diaryLayout";
import colors from "../styles/theme";
import { Input, Button } from "../styles/styledElement";
import ShowError from "../layout/ShowError";

const StyledProfileContainer = styled.div`
  position: relative;
  height: 20rem;
  width: 25rem;
  margin: auto;
  margin-top: 22%;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px ${colors.bg2};
  > div.user-img {
    margin-top: -5rem;
    margin-bottom: 2rem;
    height: 10rem;
    width: 10rem;
    align-self: center;
    background: ${colors.bg2};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: auto;
      display: block;
      background: ${colors.text3};
      height: 100%;
    }
  }
  > button.edit-profile-btn {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  /* Loading Profile Skeleton */
  &[data-loading] {
    > div.profile-skeleton {
      position: relative;
      overflow: hidden;
      > div {
        position: relative;
        height: 1.3rem;
        margin: 1rem;
        width: 50%;
        min-width: 50%;
        background: ${colors.bg2};
        overflow: hidden;
      }
      &::before {
        content: " ";
        height: 100%;
        width: 1rem;
        z-index: 1;
        position: absolute;
        transform: rotate(30deg);
        box-shadow: 0 0 15px 4px ${colors.bg1};
        animation: loading 2s infinite ease-in-out;
        background: ${colors.bg1};
      }
      @keyframes loading {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: rotate(30deg);
          transform: translateX(400px);
        }
      }
    }
    > div.img-skeleton {
    }
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

const ProfileSkeleton = () => {
  return (
    <StyledProfileContainer data-loading>
      <div className="user-img img-skeleton"></div>
      <div className="user-data profile-skeleton">
        <StyledProfileData></StyledProfileData>
        <StyledProfileData></StyledProfileData>
        <StyledProfileData></StyledProfileData>
        <StyledProfileData></StyledProfileData>
      </div>
    </StyledProfileContainer>
  );
};

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    profile,
    profileLoading,
    profileError,
    profileUpdateLoading,
    profileUpdateSuccessMsg,
    profileUpdateError,
  } = useSelector((state) => state.user);

  const [editProfile, setEditProfile] = useState(false);
  const [userName, setUserName] = useState(!!profile ? profile.userName : "");

  useEffect(() => {
    if (!!!profile) {
      dispatch(fetchUser(history));
    }
  }, [history, profile, dispatch]);

  const handleSaveProfile = () => {
    console.log(userName);
    dispatch(updateUserProfile({ userName, gender: profile.gender }));

    setEditProfile(false);
  };
  return (
    <StyledDiaryLayout>
      <DiaryNavbar />
      <StyledDiaryBody>
        {profileLoading ? (
          <ProfileSkeleton />
        ) : !!profileError ? <ShowError error={profileError.data.error} />: (
          <StyledProfileContainer>
            {!!profile && (
              <>
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
                        defaultValue={profile.userName}
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
                    <h3>
                      {dayjs(profile.createdAt).format("ddd, DD MMMM YYYY")}
                    </h3>
                  </StyledProfileData>
                </div>
                {!editProfile ? (
                  <Button
                    noBackground
                    secondary
                    title="Edit profile detail"
                    className="edit-profile-btn"
                    onClick={() => setEditProfile(true)}
                    disabled={profileUpdateLoading}
                  >
                    {profileUpdateLoading ? (
                      <PulseLoader color={colors.bg3} />
                    ) : (
                      <i className="fas fa-pencil-alt" />
                    )}
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
              </>
            )}
          </StyledProfileContainer>
        )}
      </StyledDiaryBody>
    </StyledDiaryLayout>
  );
};

export default Profile;
