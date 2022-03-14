import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, Listing } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/listing" component={Listing} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;