const { Schema, model } = require('mongoose');
let express = require('express');

const CoeSchema = new Schema({
	coe_data: [
		{
			title: {
				type: String,
				required: true,
			},
			descriptions: {
				type: String,
				required: true,
			},
			premium: {
				type: Number,
				required: true,
			},
			changes: {
				change_type: {
					type: String,
					required: true,
				},
				amount: {
					type: Number,
				},
			},
		},
	],
});

const Coe = model('coe', AdminSchema);

module.exports = Coe;
