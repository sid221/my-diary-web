import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import _ from "lodash";

import {
  DiaryLayout,
  DiaryNoteCard,
  StyledDiaryHead,
  StyledNewUser,
} from "../../layout/diaryLayout";
import colors from "../../styles/theme";

const StyledNotesContainer = styled.div`
  width: 100%;
  height: calc(100% - 14vh);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledMonthlyNotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h3.date {
    color: ${colors.dtext1};
    border-bottom: 2px solid ${colors.dtext2};
    margin-top: 0;
  }
  div.notes {
    display: flex;
    flex-flow: row wrap;
    > div {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const notes = [
  {
    noteId: "Osif2gXpdWylDiBLaofX",
    createdAt: "Sep 10 2020",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
  },
  {
    noteId: "jubT58Jsfey11s6ORIIO",
    createdAt: "Sep 07 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "C6gc9uB5q1jjLqgtJRzZ",
    createdAt: "Sep 05 2020",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "jUDAYCro0tw0BSsAR1kG",
    createdAt: "Sep 03 2020",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "lCgknVQwkcbk3QxY30bV",
    createdAt: "Sep 01 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "hxqrhEh4hfGnVdGo96aP",
    createdAt: "Mar 25 2015",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "What is Lorem Ipsum?",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
  },
  {
    noteId: "HXONW66nI0wY4sTHDuqE",
    createdAt: "Mar 21 2020",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    title: "What is Lorem Ipsum?",
  },
  {
    noteId: "4OczUCbdI2O2JZrjhafk",
    createdAt: "Apr 20 2020",
    title: "What is Lorem Ipsum?",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    noteId: "kavPgHEfJiOikkLNfG9H",
    createdAt: "Sep 03 2020",
    title: "posted 2ndnote",
    userId: "EJJgMWkx8pQc09v04vM5USUhrJ82",
    body: "new2 post from client side",
  },
];

const Diary = () => {
  let history = useHistory();
  const [monthList, setMonthList] = useState([]);
  const [noteDataByMonth, setNoteDataByMonth] = useState({});
  const groupNotesByMonthYear = () => {
    let sortedDiaryNotesArray = [];

    const groupedNotesByMonth = _.groupBy(notes, (item) =>
      dayjs(item.createdAt).format("MMM, YYYY")
    );
    const sortedMonthList = _.sortBy(Object.keys(groupedNotesByMonth), (t) =>
      dayjs(`01 ${t}`)
    ).reverse();
    console.log("groupedNotesByMonth list: ", groupedNotesByMonth);
    console.log("sortedMonthList list: ", sortedMonthList);

    // getting monthly notes from sortedMonthList and groupedNotesByMonth
    // const gettingDataFromNotesObj = sortedMonthList.map((e) => {
    //   return grouped[e];
    // });

    setMonthList(sortedMonthList);
    setNoteDataByMonth(groupedNotesByMonth);
  };

  useEffect(() => {
    groupNotesByMonthYear();

    history.push(window.location.pathname);
    // return () => {
    //   cleanup
    // }
  }, [history]);

  return (
    <DiaryLayout>
      <StyledDiaryHead>
        <h1>
          <img src="/static/images/my_memoir.svg" alt="My Memoir" />
        </h1>
        {monthList.length > 0 && (
          <select onChange={(e) => (window.location = "#" + e.target.value)}>
            {monthList.map((date) => (
              <option key={date} value={date}>
                {dayjs(`01 ${date}`).format("MMMM, YYYY")}
              </option>
            ))}
          </select>
        )}
        <button title="Create A New Note.">
          <i className="fas fa-plus" />
        </button>
      </StyledDiaryHead>
      <StyledNotesContainer>
        {monthList.length > 0 ? (
          monthList.map((date) => {
            return (
              <StyledMonthlyNotes key={date} id={date}>
                <h3 className="date">
                  {dayjs(`01 ${date}`).format("MMMM, YYYY")}
                </h3>
                <div className="notes">
                  {noteDataByMonth[date].length > 0 &&
                    noteDataByMonth[date].map((note) => (
                      <DiaryNoteCard key={note.noteId}>
                        <div className="note-created-date">
                          {dayjs(note.createdAt).format("ddd, DD MMM YYYY")}
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
              to="/create-note"
              title="Create A New Note."
              className="createNote"
            >
              <i className="fas fa-plus" />
              <span>Create Notes</span>
            </button>
            <button onClick={groupNotesByMonthYear}>Get Sort Data</button>
          </StyledNewUser>
        )}
      </StyledNotesContainer>
    </DiaryLayout>
  );
};

export default Diary;
