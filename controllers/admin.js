const jwt = require('jsonwebtoken');
const AdminModel = require('../models/Admin');
const bcrypt = require('bcrypt');
require('dotenv').config();

const controller = {
	login: async (req, res) => {
		const { username, password } = req.body;

		try {
			const authUser = await AdminModel.findOne({
				username,
			});

			if (!authUser) {
				return res.send('Invalid Credentials! Try Again');
			}

			const match = await bcrypt.compare(password, authUser.password);

			if (match) {
				const payload = { name: username };

				const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
					expiresIn: 30 * 60,
				});
				return res.json({ accessToken });
			}
			return res.send('Invalid Credentials! Try Again');
		} catch (error) {
			return res.status(500).send('Server Error! Try Again');
		}
	},

	addAdmin: async (req, res) => {
		const { username, password } = req.body;

		let registeredUser;

		try {
			registeredUser = await AdminModel.findOne({
				username,
			});
		} catch (error) {
			return res.status(500).send('Server Error! Try Again');
		}

		if (registeredUser) {
			return res.send({ message: 'User Exists' });
		}

		const hashPassword = await bcrypt.hash(password, 10);

		try {
			await AdminModel.create({
				username,
				password: hashPassword,
			});

			return res.send({ message: 'User Registered' });
		} catch (error) {
			return res.status(500).send('Server Error! Try Again');
		}
	},
};

module.exports = controller;
