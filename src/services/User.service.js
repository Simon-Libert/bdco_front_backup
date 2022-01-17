import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const getPublicContent = () => {
	return axios.get(API_URL + 'users');
};

export default getPublicContent;
