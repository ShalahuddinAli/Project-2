const CoeModel = require('../models/Coe');

const controller = {
	getCoe: async (_req, res) => {
		try {
			const data = await CoeModel.findOne().sort({ _id: -1 });
			res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error);
		}
	},
	addCoe: async (req, res) => {
		const { year, month, quarter, data } = req.body;

		try {
			await CoeModel.create({ year, month, quarter, data });
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
