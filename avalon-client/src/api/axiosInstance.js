import axios from 'axios';
// const NewInstance = axios.create([config]);

const NewInstance = axios.create({
	// Configuration
	baseURL: 'http://127.0.0.1:8000/api',
	timeout: 8000,
	headers: {
		Accept: 'application/json',
		// 'x-rapidapi-key': '<your-key-here>'
	},
});

export default NewInstance

// API Call
// const getQuotes = async () => {
// 	const response = await QuotesClient.get('/random', {
// 		params: { category: 'all', count: '1' },
// 	});
// 	console.log(response.data);
// };
