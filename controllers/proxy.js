const express = require('express');
const axios = require('axios');
require('dotenv').config();

const controller = {
	getCarpark: async (req, res) => {
		let location;
		let availability;

		const requestLocation = axios.get(
			`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q={"address":"${req.params.location}"}`
		);
		//only provides cp availability with cp no. only
		const requestAvailability = axios.get(
			`https://api.data.gov.sg/v1/transport/carpark-availability`
		);
		try {
			const [data1, data2] = await axios.all([
				requestLocation,
				requestAvailability,
			]);
			location = data1.data.result.records;
			availability = data2.data.items[0].carpark_data;

			if (location && availability) {
				const locationObj = {};
				const result = [];

				for (const item of location) {
					locationObj[item.car_park_no] = item;
				}
				for (const element of availability) {
					if (locationObj[element.carpark_number]) {
						// compare both data, then merge into 1 data
						result.push({
							address: locationObj[element.carpark_number].address,
							availableLots: element.carpark_info[0].lots_available,
							totalLots: element.carpark_info[0].total_lots,
							nonSeasonLot:
								locationObj[element.carpark_number].short_term_parking,
							freeParking: locationObj[element.carpark_number].free_parking,
							xCoord: locationObj[element.carpark_number].x_coord,
							yCoord: locationObj[element.carpark_number].y_coord,
						});
					}
				}

				res.json(result);
			}
		} catch (error) {
			res.sendStatus(500);
		}
	},

	getTrafficCam: async (_req, res) => {
		const BASE_URL = 'https://api.data.gov.sg/v1/transport/traffic-images';

		try {
			const { data } = await axios.get(BASE_URL);

			res.json(data.items[0].cameras);
		} catch (error) {
			res.sendStatus(500);
		}
	},

	getTrafficNews: async (_req, res) => {
		const BASE_URL =
			'http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents';

		const AccountKey = process.env.API_KEY_DATAMALL;

		try {
			const { data } = await axios.get(BASE_URL, {
				headers: { AccountKey: AccountKey },
			});
			res.json(data.value);
		} catch (error) {
			res.sendStatus(500);
		}
	},
};

module.exports = controller;
