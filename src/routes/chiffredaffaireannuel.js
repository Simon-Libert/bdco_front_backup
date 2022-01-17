import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/chiffredaffaireannuel/';

const chiffredaffaireannuelRoutes = [
	<Route path='/chiffredaffaireannuels/create' component={Create} exact key='create' />,
	<Route path='/chiffredaffaireannuels/edit/:id' component={Update} exact key='update' />,
	<Route path='/chiffredaffaireannuels/show/:id' component={Show} exact key='show' />,
	<Route path='/chiffredaffaireannuels/' component={List} exact strict key='list' />,
	<Route path='/chiffredaffaireannuels/:page' component={List} exact strict key='page' />,
];

export default chiffredaffaireannuelRoutes;
