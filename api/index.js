const axios = require('axios');

const api = {
	fetchCarpark: async (location) => {
		const requestLocation = axios.get(
			`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q={"address":"${location}"}`
		);
		const requestAvailability = axios.get(
			`https://api.data.gov.sg/v1/transport/carpark-availability`
		);

		return await axios.all([requestLocation, requestAvailability]);
	},
	fetchTrafficNews: async (accountKey) => {
		const newsUrl =
			'http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents';

		return await axios.get(newsUrl, {
			headers: { AccountKey: accountKey },
		});
	},
	fetchTrafficCam: async () => {
		const camUrl = 'https://api.data.gov.sg/v1/transport/traffic-images';

		return await axios.get(camUrl);
	},
};

module.exports = api;
