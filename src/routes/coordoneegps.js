import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/coordoneegps/";

export default [
  <Route path="/coordoneegps/create" component={Create} exact key="create" />,
  <Route path="/coordoneegps/edit/:id" component={Update} exact key="update" />,
  <Route path="/coordoneegps/show/:id" component={Show} exact key="show" />,
  <Route path="/coordoneegps/" component={List} exact strict key="list" />,
  <Route path="/coordoneegps/:page" component={List} exact strict key="page" />,
];
