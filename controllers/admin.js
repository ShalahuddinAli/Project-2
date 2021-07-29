const express = require('express');
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
					const user = { name: username };

					const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
					res.json({ accessToken });
				} else {
					res.json({ message: 'Invalid Credentials' });
				}
			} else {
				res.json({ message: 'Invalid Credentials' });
			}
		} catch (error) {
			res.sendStatus(500);
		}
	},
};

module.exports = controller;
