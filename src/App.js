import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Home, Login, Register, Diary, Note, CreateNote, Profile, PageNotFound } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact children={<Redirect to="/" />} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/diary" exact component={Diary} />
        <Route path="/diary/createNote" exact component={CreateNote} />
        <Route path="/note" exact component={Note} />
        <Route path="/note/:id" exact component={Note} />
        <Route path="/profile" exact component={Profile} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
