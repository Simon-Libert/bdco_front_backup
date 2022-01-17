import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const login = async (username, password) => {
	const response = await axios.post(API_URL + 'login', {
		username,
		password,
	});
	if (response.data.token) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

const logService = {
	login,
	logout,
	getCurrentUser,
};

export default logService;
