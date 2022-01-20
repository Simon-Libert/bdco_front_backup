import React from 'react';
import { Accordion, AccordionSection } from './../accordion/Accordion';
import { StyledSideMenu } from './Style';

const sideCategories = [
	{
		id: 1,
		name: 'Adresses des commerces',
		subcategories: [
			{
				id: 1,
				name: "Entrer l'adresse d'un nouveau commerce",
				url: '/adressecommerces/create ',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/adressecommerces/edit/:id ',
			},
			{
				id: 3,
				name: 'Afficher un commerce',
				url: '/adressecommerces/show/:id ',
			},
			{
				id: 4,
				name: 'Afficher la liste des commerces',
				url: '/adressecommerces/',
			},
		],
	},
	{
		id: 2,
		name: "Chiffres d'affaires des commerces",
		subcategories: [
			{
				id: 1,
				name: "Entrer un nouveau chiffre d'affaire",
				url: '/chiffredaffaireannuels/create ',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/chiffredaffaireannuels/edit/:id ',
			},
			{
				id: 3,
				name: "Afficher le chiffre d'affaire d'un commerce",
				url: '/chiffredaffaireannuels/show/:id ',
			},
			{
				id: 4,
				name: "Afficher la liste des chiffres d'affaires des commerces",
				url: '/chiffredaffaireannuels/',
			},
		],
	},
	{
		id: 3,
		name: 'Nom des Commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau nom de commerce',
				url: '/commercebsms/create ',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/commercebsms/edit/:id ',
			},
			{
				id: 3,
				name: 'Afficher un commerce',
				url: '/commercebsms/show/:id ',
			},
			{
				id: 4,
				name: 'Afficher la liste des noms de commerces',
				url: '/commercebsms/ ',
			},
		],
	},
	{
		id: 4,
		name: 'Contacts des commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau contact',
				url: '/contactcommerces/create ',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/contactcommerces/edit/:id ',
			},
			{
				id: 3,
				name: 'Afficher un contact',
				url: '/contactcommerces/show/:id ',
			},
			{
				id: 4,
				name: 'Afficher la liste des contacts de commerces',
				url: '/contactcommerces/ ',
			},
		],
	},
	{
		id: 5,
		name: 'Coordonnées GPS des commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau coordonnées GPS',
				url: '/coordoneegps/create ',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/coordoneegps/edit/:id',
			},
			{
				id: 3,
				name: "Afficher les coordonnées GPS d'un commerce",
				url: '/coordoneegps/show/:id',
			},
			{
				id: 4,
				name: 'Afficher la liste des coordonnées GPS des commerces',
				url: '/coordoneegps/',
			},
		],
	},
	{
		id: 6,
		name: 'Gérants des commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau gérant',
				url: '/gerants/create',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/gerants/edit/:id',
			},
			{
				id: 3,
				name: "Afficher le gérant d'un commerce",
				url: '/gerants/show/:id',
			},
			{
				id: 4,
				name: 'Afficher la liste des gérants des commerces',
				url: '/gerants/',
			},
		],
	},
	{
		id: 7,
		name: 'Horaires des commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau horaire',
				url: '/horraires/create',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/horraires/edit/:id',
			},
			{
				id: 3,
				name: "Afficher les horaires d'un commerce",
				url: '/horraires/show/:id',
			},
			{
				id: 4,
				name: 'Afficher la liste des horaires des commerces',
				url: '/horraires/',
			},
		],
	},
	{
		id: 8,
		name: 'Propriétaires des commerces',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouveau propriétaire',
				url: '/proprietaires/create',
			},
			{
				id: 2,
				name: 'Modifier',
				url: '/proprietaires/edit/:id',
			},
			{
				id: 3,
				name: "Afficher le propriétaire d'un commerce",
				url: '/proprietaires/show/:id',
			},
			{
				id: 4,
				name: 'Afficher la liste des propriétaires des commerces',
				url: '/proprietaires/',
			},
		],
	},
	{
		id: 9,
		name: 'Utilisateurs',
		subcategories: [
			{
				id: 1,
				name: 'Entrer un nouvel utilisateur',
				url: '/users/create',
			},
			{
				id: 2,
				name: 'Modifier un utilisateur',
				url: '/users/edit/:id',
			},
			{
				id: 3,
				name: 'Afficher un utilisateur',
				url: '/users/show/:id',
			},
			{
				id: 4,
				name: 'Afficher la liste des utilisateurs',
				url: '/users/',
			},
		],
	},
];

const SideMenu = (props) => {
	return (
		<StyledSideMenu open={props.open} onClick={props.onClick}>
			<AccordionSection>
				{sideCategories.map((sideCategory) => (
					<Accordion
						accordionTitle={sideCategory.name}
						subcategories={sideCategory.subcategories}
					/>
				))}
			</AccordionSection>
		</StyledSideMenu>
	);
};

export default SideMenu;
