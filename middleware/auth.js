const jwt = require('jsonwebtoken');

require('dotenv').config();

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
	if (err instanceof TokenExpiredError) {
		return res
			.status(403)
			.json({ message: 'Unauthorized! Access Token was expired!' });
	}

	return res.sendStatus(401).json({ message: 'Unauthorized!' });
};

const authenticateToken = async (req, res, next) => {
	const authToken = req.headers['x-auth-token'];
	const refreshToken = req.cookies.refreshToken;

	console.log('middle');

	if (!authToken && !refreshToken) {
		return res.status(401).json({ message: 'No token provided' });
	}

	if (!authToken && refreshToken) {
		try {
			console.log('itu');
			const user = await jwt.verify(
				refreshToken,
				process.env.REFRESH_TOKEN_SECRET
			);
			req.user = user;
			console.log(req.user);
			next();
		} catch (error) {
			return res.sendStatus(401).json({ message: 'Unauthorized!' });
		}
	}

	try {
		const user = await jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
		req.user = user;
		next();
	} catch (error) {
		return catchError(error, res);
	}
};

module.exports = authenticateToken;
