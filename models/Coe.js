const { Schema, model } = require('mongoose');

const CoeSchema = new Schema({
	year: {
		type: Number,
		required: true,
	},
	month: {
		type: Number,
		enum: [Array.from({ length: 12 }, (_, i) => i + 1)],
		required: true,
	},
	quarter: {
		type: Number,
		enum: [1, 2],
		required: true,
	},
	data: [
		{
			category: {
				type: String,
				required: true,
			},
			descriptions: {
				type: String,
				required: true,
			},
			current_premium: {
				type: Number,
				required: true,
			},
			prev_premium: {
				type: Number,
				required: true,
			},
		},
	],
});

const Coe = model('coe', CoeSchema);

module.exports = Coe;
