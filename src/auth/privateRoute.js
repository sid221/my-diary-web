import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = useSelector((state) => state.user.token);
  const authenticated = !!localStorage.token || !!token ? true : false;
  return (
    <Route>
      {authenticated ? <Component {...props} /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
