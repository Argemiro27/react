import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Main, Login } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
