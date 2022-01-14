import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/contactcommerce/";

export default [
  <Route
    path="/contactcommerces/create"
    component={Create}
    exact
    key="create"
  />,
  <Route
    path="/contactcommerces/edit/:id"
    component={Update}
    exact
    key="update"
  />,
  <Route path="/contactcommerces/show/:id" component={Show} exact key="show" />,
  <Route path="/contactcommerces/" component={List} exact strict key="list" />,
  <Route
    path="/contactcommerces/:page"
    component={List}
    exact
    strict
    key="page"
  />,
];
