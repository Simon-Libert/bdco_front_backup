import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

import AuthService from './services/Auth.service';

import Home from './components/Home';
import Login from './components/Login';

import Profile from './components/Profile';

function App() {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	const logOut = () => {
		AuthService.logout();
	};

	return (
		<div>
			<nav className='navbar navbar-expand navbar-dark bg-dark'>
				<Link to={'/'} className='navbar-brand'>
					BDCO
				</Link>
				<div className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<Link to={'/home'} className='nav-link'>
							Home
						</Link>
					</li>

					{currentUser && (
						<li className='nav-item'>
							<Link to={'/user'} className='nav-link'>
								User
							</Link>
						</li>
					)}
				</div>

				{currentUser ? (
					<div className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link to={'/profile'} className='nav-link'>
								{currentUser.username}
							</Link>
						</li>
						<li className='nav-item'>
							<a href='/login' className='nav-link' onClick={logOut}>
								LogOut
							</a>
						</li>
					</div>
				) : (
					<div className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link to={'/login'} className='nav-link'>
								Login
							</Link>
						</li>
					</div>
				)}
			</nav>

			<div className='container mt-3'>
				<Switch>
					<Route exact path={['/', '/home']} component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/profile' component={Profile} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
