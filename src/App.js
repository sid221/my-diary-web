import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  redirect,
} from "react-router-dom";

import { Home, Login, Register, Diary } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact children={<Redirect to="/" />} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/diary" exact component={Diary} />
      </Switch>
    </Router>
  );
}

export default App;
