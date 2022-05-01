const CoeModel = require('../models/Coe');

const controller = {
	getCoe: async (_req, res) => {
		try {
			const data = await CoeModel.findOne().sort({ _id: -1 });
			res.json(data);
		} catch (error) {
			return res.status(500).send(error.message);
		}
	},
	addCoe: async (req, res) => {
		const data = req.body;
		let prevData;

		function coeChange(curr, prev) {
			const changeAmt = curr - prev;
			if (changeAmt === 0) return { change_type: 'unchange', amount: 0 };
			if (changeAmt > 0) return { change_type: 'increase', amount: changeAmt };
			if (changeAmt < 0)
				return { change_type: 'decrease', amount: Math.abs(changeAmt) };
		}

		try {
			prevData = await CoeModel.findOne().sort({ _id: -1 });
		} catch (error) {
			return res.status(500).send(error.message);
		}

		const newData = prevData.coe_data.map((item) => {
			return {
				category: item.category,
				descriptions: item.descriptions,
				premium: data[item.category],
				changes: coeChange(data[item.category], item.premium),
			};
		});

		console.log(newData);
		try {
			// await CoeModel.create({
			// 	coe_data: data,
			// });

			return res.json({ newData });
		} catch (error) {
			return res.status(500).send(error.message);
		}
	},
	editCoe: async (_req, res) => {
		console.log('edit');
		res.json({ mesagge: 'hurray' });
	},
};

module.exports = controller;
