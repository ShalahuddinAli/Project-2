const express = require('express');
const controller = require('../controllers/admin');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/login', controller.login);
router.post('/addAdmin', controller.addAdmin);

module.exports = router;
