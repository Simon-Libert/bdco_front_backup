import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/adressecommerce/";

export default [
  <Route
    path="/adressecommerces/create"
    component={Create}
    exact
    key="create"
  />,
  <Route
    path="/adressecommerces/edit/:id"
    component={Update}
    exact
    key="update"
  />,
  <Route path="/adressecommerces/show/:id" component={Show} exact key="show" />,
  <Route path="/adressecommerces/" component={List} exact strict key="list" />,
  <Route
    path="/adressecommerces/:page"
    component={List}
    exact
    strict
    key="page"
  />,
];
