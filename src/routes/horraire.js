import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/horraire/";

export default [
  <Route path="/horraires/create" component={Create} exact key="create" />,
  <Route path="/horraires/edit/:id" component={Update} exact key="update" />,
  <Route path="/horraires/show/:id" component={Show} exact key="show" />,
  <Route path="/horraires/" component={List} exact strict key="list" />,
  <Route path="/horraires/:page" component={List} exact strict key="page" />,
];
