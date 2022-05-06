const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminModel = require('../models/Admin');

require('dotenv').config();

const controller = {
	login: async (req, res) => {
		const { username, password } = req.body;
		let authUser;

		const generateToken = (payload, tokenSecret, expiry) => {
			return jwt.sign(payload, tokenSecret, {
				expiresIn: parseInt(expiry),
			});
		};

		try {
			authUser = await AdminModel.findOne({
				username,
			});
		} catch (error) {
			return res.status(500).json({ message: 'Server Error! Try Again' });
		}

		if (!authUser) {
			return res
				.status(401)
				.json({ message: 'Invalid Credentials! Try Again' });
		}

		const match = await bcrypt.compare(password, authUser.password);

		if (match) {
			const payload = { username };

			const accessToken = generateToken(
				payload,
				process.env.ACCESS_TOKEN_SECRET,
				process.env.ACCESS_TOKEN_EXPIRATION
			);
			const refreshToken = generateToken(
				payload,
				process.env.REFRESH_TOKEN_SECRET,
				process.env.REFRESH_TOKEN_EXPIRATION
			);
			//cookie is in millisecond
			res.cookie('refreshToken', refreshToken, {
				maxAge: parseInt(process.env.REFRESH_TOKEN_EXPIRATION) * 1000,
				httpOnly: true,
				// secure: true,
			});

			return res
				.status(200)
				.json({ message: 'Logged in', username, accessToken });
		}
		return res.status(401).json({ message: 'Invalid Credentials! Try Again' });
	},

	logout: async (_req, res) => {
		res.clearCookie('refreshToken', {
			httpOnly: true,
			// secure: true,
		});
		return res.status(200).json({ message: 'Logout success' });
	},

	refreshToken: async (req, res) => {
		const payload = { username: req.user.username };
		const newAccessToken = generateToken(
			payload,
			process.env.ACCESS_TOKEN_SECRET,
			process.env.ACCESS_TOKEN_EXPIRATION
		);
		return res
			.status(201)
			.json({ message: 'Token refresh', accessToken: newAccessToken });
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
			return res.statue(409).json({ message: 'User Exists' });
		}

		const hashPassword = await bcrypt.hash(password, 10);

		try {
			await AdminModel.create({
				username,
				password: hashPassword,
			});

			return res.status(201).json({ message: 'User Registered' });
		} catch (error) {
			return res.status(500).json({ message: 'Server Error! Try Again' });
		}
	},
};

module.exports = controller;
