import axios from 'axios';

export default axios.create({
	// baseURL: 'https://jsonplaceholder.typicode.com/',
	baseURL: 'https://random-data-api.com/api/v2/',
	headers: {
		'Content-type': 'application/json',
	},
});
