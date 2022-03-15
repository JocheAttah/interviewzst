import React from "react";
import { Switch, Route } from "react-router-dom";
import {  Listing } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Listing} />
    </Switch>
  );
};

export default Routes;