const fetchCarpark = require('../api').fetchCarpark;
const fetchTrafficNews = require('../api').fetchTrafficNews;
const fetchTrafficCam = require('../api').fetchTrafficCam;

require('dotenv').config();

const controller = {
	getCarpark: async (req, res) => {
		let location;
		let availability;

		try {
			const [data1, data2] = await fetchCarpark(req.params.location);

			location = data1.data.result.records;
			availability = data2.data.items[0].carpark_data;
		} catch (error) {
			return res.json({ message: error.message });
		}

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
					nonSeasonLot: locationObj[element.carpark_number].short_term_parking,
					freeParking: locationObj[element.carpark_number].free_parking,
					xCoord: locationObj[element.carpark_number].x_coord,
					yCoord: locationObj[element.carpark_number].y_coord,
				});
			}
		}
		if (!result?.length) {
			return res.json({
				message: `No result found for ${req.params.location}`,
			});
		}

		return res.status(200).json(result);
	},

	getTrafficCam: async (_req, res) => {
		try {
			const { data } = await fetchTrafficCam();

			return res.json(data.items[0].cameras);
		} catch (error) {
			return res.sendStatus(500);
		}
	},

	getTrafficNews: async (_req, res) => {
		try {
			const { data } = await fetchTrafficNews(process.env.API_KEY_DATAMALL);
			return res.json(data.value);
		} catch (error) {
			return res.sendStatus(500);
		}
	},
};

module.exports = controller;
