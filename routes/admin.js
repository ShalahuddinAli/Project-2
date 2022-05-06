const express = require('express');

const auth = require('../middleware/auth');
const controller = require('../controllers/admin');

const router = express.Router();

router.post('/login', controller.login);
router.post('/logout', auth, controller.logout);
router.post('/addAdmin', auth, controller.addAdmin);
router.post('/refresh-token', auth, controller.refreshToken);

module.exports = router;
