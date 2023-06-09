import http from '../http-common';

const getAll = () => {
	return http.get('/users');
};

const getBrand = () => {
	return http.get('/appliances');
};

const PersonalityService = {
	getAll,
	getBrand,
};

export default PersonalityService;
