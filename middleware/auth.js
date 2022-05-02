const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
	console.log(req.body, 'middle');
	const authToken = req.headers['x-auth-token'];
	if (!authToken) {
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
