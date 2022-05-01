import axios from 'axios';

const controller = {
	getCoe: async (_req, res) => {
		console.log('add');
		res.json({ mesagge: 'hurray' });
	},
	addCoe: async (_req, res) => {
		console.log('add');
		res.json({ mesagge: 'hurray' });
	},
	editCoe: async (req, res) => {
		console.log('edit');
	},
};

module.exports = controller;
