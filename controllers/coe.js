const CoeModel = require('../models/Coe');

const controller = {
	getAllCoe: async (_req, res) => {
		try {
			const data = await CoeModel.find({});
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	getCoe: async (_req, res) => {
		try {
			const data = await CoeModel.findOne().sort({ _id: -1 }).exec();
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	addCoe: async (req, res) => {
		const { year, month, quarter, data } = req.body;

		console.log(req.body, 'addCoe');

		const queryParams = {};

		if (quarter === '2') {
			queryParams.quarter = '1';
			queryParams.year = year;
			queryParams.month = month;
		}

		if (quarter === '1' && month > '1') {
			queryParams.quarter = '2';
			queryParams.year = year;
			queryParams.month = String(parseInt(month) - 1);
		}

		if (quarter === '1' && month === '1') {
			queryParams.quarter = '2';
			queryParams.year = String(parseInt(year) - 1);
			queryParams.month = String(parseInt(month) - 1);
		}

		let prevData;

		try {
			prevData = await CoeModel.findOne(queryParams).exec();
		} catch (error) {
			return res.status(500).json(error);
		}

		if (!prevData) {
			return res.status(400).json({ message: 'Invalid request' });
		}

		const newDbDoc = { year, month, quarter, data: [] };

		for (let item of prevData.data) {
			newDbDoc.data.push({
				category: item.category,
				descriptions: item.descriptions,
				current_premium: data[item.category],
				prev_premium: item.current_premium,
			});
		}

		try {
			await CoeModel.create(newDbDoc);
			return res.status(201).json({ message: 'Added Successfully' });
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	editCoe: async (req, res) => {
		const { id, subId, premium } = req.body;

		try {
			await CoeModel.findOneAndUpdate(
				{ _id: id, 'data._id': subId },
				{ $set: { 'data.$.premium': premium } },
				{ new: true }
			);
			return res.status(201).json({ message: 'Updated Successfully' });
		} catch (error) {
			return res.status(500).json(error);
		}
	},
};

module.exports = controller;
