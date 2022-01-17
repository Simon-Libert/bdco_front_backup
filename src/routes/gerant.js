import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/gerant/';

const gerantRoutes = [
	<Route path='/gerants/create' component={Create} exact key='create' />,
	<Route path='/gerants/edit/:id' component={Update} exact key='update' />,
	<Route path='/gerants/show/:id' component={Show} exact key='show' />,
	<Route path='/gerants/' component={List} exact strict key='list' />,
	<Route path='/gerants/:page' component={List} exact strict key='page' />,
];

export default gerantRoutes;
