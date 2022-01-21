import React from 'react';
import { ButtonGroup, DropdownButton, Dropdown, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonAccueil = () => {
	return (
		<div className='text-center'>
			<Card>
				<ButtonGroup vertical>
					<DropdownButton
						as={ButtonGroup}
						title='COMMERCES BOULOGNE SUR MER'
						id='bg-vertical-dropdown-1'
						variant='dark'>
						<Dropdown.Item eventKey='1'>
							<Link to='/commercebsms/'>Liste des Commerces </Link>
						</Dropdown.Item>
						<Dropdown.Item eventKey='1'>
							<Link to='/horraires/'>Horaires </Link>
						</Dropdown.Item>
						<Dropdown.Item eventKey='2'>
							<Link to='/adressecommerces/'>Adresses</Link>
						</Dropdown.Item>
						<Dropdown.Item eventKey='2'>
							<Link to='/contactcommerces/'>Contacts</Link>
						</Dropdown.Item>
					</DropdownButton>
				</ButtonGroup>
			</Card>
		</div>
	);
};

export default ButtonAccueil;
