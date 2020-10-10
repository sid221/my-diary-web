import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import { fetchUserNotes } from "../../redux/diary/diaryActions";

import {
  DiaryLayout,
  DiaryNoteCard,
  StyledDiaryHead,
  StyledNotesContainer,
  StyledNewUser,
} from "../../layout/diaryLayout";
import ShowError from "../../layout/ShowError";

import { Select } from "../../styles/styledElement";
import colors from "../../styles/theme";

const StyledMonthlyNotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h3.date {
    color: ${colors.text1};
    border-bottom: 2px solid ${colors.dtext2};
    margin-top: 0;
  }
  div.notes {
    display: flex;
    flex-flow: row wrap;
    > div {
      margin-right: 1rem;
      margin-bottom: 1rem;
      flex-grow: 1;
      max-width: 250px;
    }
  }
  /* LOADING SKELETON */
  &[data-loader] {
    > h3.date {
      height: 1.5rem;
      background: ${colors.bg2};
      border-bottom: none;
      margin-top: 0;
    }
    > div.notes {
      display: flex;
      flex-flow: row wrap;
      div {
        margin-right: 1rem;
        margin-bottom: 1rem;
        flex-grow: 1;
        max-width: 250px;
        > div.note-created-date {
          height: 1.3rem;
          width: 70%;
          background: ${colors.bg2};
        }
        > div.note-body {
          > h2 {
            margin-top: 0;
            width: 85%;
            background: ${colors.bg2};
            height: 1.6rem;
          }
          > div {
            p {
              width: 70%;
              margin-bottom: 1rem;
              height: 1.1rem;
              background: ${colors.bg2};
            }
          }
        }
      }
    }
  }
`;

const DiaryLoadingSkeleton = () => {
  const ghostArr = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <StyledMonthlyNotes data-loader>
        <h3 className="date">{""}</h3>
        <div className="notes">
          {ghostArr.map((d, i) => (
            <DiaryNoteCard key={i}>
              <div className="note-created-date"></div>
              <div className="note-body">
                <h2 className="note-title">{""}</h2>
                <div className="note-content">
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </DiaryNoteCard>
          ))}
        </div>
      </StyledMonthlyNotes>
      <StyledMonthlyNotes data-loader>
        <h3 className="date">{""}</h3>
        <div className="notes">
          {ghostArr.map((d, i) => (
            <DiaryNoteCard key={i}>
              <div className="note-created-date"></div>
              <div className="note-body">
                <h2 className="note-title">{""}</h2>
                <div className="note-content">
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </DiaryNoteCard>
          ))}
        </div>
      </StyledMonthlyNotes>
    </>
  );
};

const Diary = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { notes, notesLoading, notesError } = useSelector(
    (state) => state.diary
  );
  const [monthList, setMonthList] = useState();
  const [noteDataByMonth, setNoteDataByMonth] = useState();

  useEffect(() => {
    // console.log("diary useEffect| Notes: ", notes);
    window.location.hash = "";
    if (!notes) {
      dispatch(fetchUserNotes());
    }
  }, [dispatch, notes]);

  useEffect(() => {
    const groupNotesByMonthYear = () => {
      const groupedNotesByMonth = _.groupBy(notes, (item) =>
        dayjs(item.createdAt).format("MMM, YYYY")
      );
      const sortedMonthList = _.sortBy(Object.keys(groupedNotesByMonth), (t) =>
        dayjs(`01 ${t}`)
      ).reverse();
      // console.log("groupedNotesByMonth list: ", groupedNotesByMonth);
      // console.log("sortedMonthList list: ", sortedMonthList);
      // getting monthly notes from sortedMonthList and groupedNotesByMonth
      // const gettingDataFromNotesObj = sortedMonthList.map((e) => {
      //   return grouped[e];
      // });
      setMonthList(sortedMonthList);
      setNoteDataByMonth(groupedNotesByMonth);
    };
    groupNotesByMonthYear();
    return () => {
      groupNotesByMonthYear();
    };
  }, [notes]);

  return (
    <DiaryLayout>
      <StyledDiaryHead>
        <h1>
          <img src="/static/images/my_memoir.svg" alt="My Memoir" />
        </h1>
        {monthList?.length > 0 && (
          <Select
            className="notes-month-list"
            onChange={(e) => (window.location = "#" + e.target.value)}
            title="Select month to see that month's notes."
            defaultValue=""
          >
            <option disabled value="">
              Select Month...
            </option>
            {monthList.map((date) => (
              <option key={date} value={date}>
                {dayjs(`01 ${date}`).format("MMMM, YYYY")}
              </option>
            ))}
          </Select>
        )}
        <button
          onClick={() => history.push("/note")}
          title="Create A New Note."
          className="diary-add-btn"
        >
          <i className="fas fa-plus" />
        </button>
      </StyledDiaryHead>
      <StyledNotesContainer>
        {notesLoading ? (
          <DiaryLoadingSkeleton />
        ) : !!notesError ? (
          <ShowError error={notesError.data.error} />
        ) : monthList?.length > 0 ? (
          monthList.map((date) => {
            return (
              <StyledMonthlyNotes key={date} id={date}>
                <h3 className="date">
                  {dayjs(`01 ${date}`).format("MMMM, YYYY")}
                </h3>
                <div className="notes">
                  {noteDataByMonth[date].length > 0 &&
                    noteDataByMonth[date].map((note) => (
                      <DiaryNoteCard
                        key={note.noteId}
                        {...note.style}
                        onClick={() => history.push(`/note/${note.noteId}`)}
                      >
                        <div className="note-created-date">
                          <span className="date-text">
                            {dayjs(note.createdAt).format("ddd, DD MMM YYYY")}
                          </span>
                        </div>
                        <div className="note-body">
                          <h2 className="note-title">{note.title}</h2>
                          <div
                            className="note-content"
                            dangerouslySetInnerHTML={{ __html: note.body }}
                          ></div>
                        </div>
                        <div className="extend-note">...</div>
                      </DiaryNoteCard>
                    ))}
                </div>
              </StyledMonthlyNotes>
            );
          })
        ) : (
          <StyledNewUser>
            <h2>
              Looks you new here, to create your first note click on the
              button...
            </h2>
            <button
              onClick={() => history.push("/note")}
              title="Create A New Note."
              className="createNote"
            >
              <i className="fas fa-plus" />
              <span>Create Notes</span>
            </button>
          </StyledNewUser>
        )}
      </StyledNotesContainer>
    </DiaryLayout>
  );
};

export default Diary;
