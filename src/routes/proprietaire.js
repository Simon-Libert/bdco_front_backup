import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/proprietaire/";

export default [
  <Route path="/proprietaires/create" component={Create} exact key="create" />,
  <Route
    path="/proprietaires/edit/:id"
    component={Update}
    exact
    key="update"
  />,
  <Route path="/proprietaires/show/:id" component={Show} exact key="show" />,
  <Route path="/proprietaires/" component={List} exact strict key="list" />,
  <Route
    path="/proprietaires/:page"
    component={List}
    exact
    strict
    key="page"
  />,
];
