const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const controller = {
	login: async (req, res) => {
		const username = req.body.username;
		const password = req.body.password;
		const authUsername = process.env.AUTH_USERNAME;
		const authPassword = process.env.AUTH_PASSWORD;

		try {
			if (username === authUsername) {
				const match = await bcrypt.compare(password, authPassword);

				if (match) {
					const payload = { name: username };

					const accessToken = jwt.sign(
						payload,
						process.env.ACCESS_TOKEN_SECRET,
						{ expiresIn: 30 * 60 }
					);
					res.json({ accessToken });
				} else {
					res.send('Invalid Credentials! Try Again');
				}
			} else {
				res.send('Invalid Credentials! Try Again');
			}
		} catch (error) {
			res.status(500).send('Server Error! Try Again');
		}
	},

	addCoe: async (req, res) => {
		console.log('add');
		res.json({ mesagge: 'hurray' });
	},
	editCoe: async (req, res) => {
		console.log('edit');
	},
};

module.exports = controller;
