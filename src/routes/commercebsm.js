import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/commercebsm/';

const commercebsmRoutes = [
	<Route path='/commercebsms/create' component={Create} exact key='create' />,
	<Route path='/commercebsms/edit/:id' component={Update} exact key='update' />,
	<Route path='/commercebsms/show/:id' component={Show} exact key='show' />,
	<Route path='/commercebsms/' component={List} exact strict key='list' />,
	<Route path='/commercebsms/:page' component={List} exact strict key='page' />,
];

export default commercebsmRoutes;
