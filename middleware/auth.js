const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
	const authToken = req.headers('x-auth-token');
	if (!authtoken) {
		res.sendStatus(401);
	}
	jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			res.sendStatus(403);
		}
		req.user = user;
		next();
	});
};

module.exports = authenticateToken;
