import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PrivateRoute, LoggedOutRoute } from "./auth/privateRoute";

import { Provider } from "react-redux";
import store from "./redux/store";

import {
  Home,
  Login,
  Register,
  Diary,
  Note,
  CreateNote,
  Profile,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact children={<Redirect to="/" />} />
          <LoggedOutRoute path="/login" exact component={Login} />
          <LoggedOutRoute path="/register" exact component={Register} />
          <PrivateRoute path="/diary" exact component={Diary} />
          <PrivateRoute path="/diary/createNote" exact component={CreateNote} />
          <PrivateRoute path="/note" exact component={Note} />
          <PrivateRoute path="/note/:id" exact component={Note} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
