import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const authenticated = !!localStorage.token || !!token ? true : false;
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const LoggedOutRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const authenticated = !!localStorage.token || !!token ? true : false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Component {...props} /> : <Redirect to="/diary" />
      }
    />
  );
};

export { PrivateRoute, LoggedOutRoute };
