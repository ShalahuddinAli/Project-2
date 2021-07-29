const express = require('express');
const controller = require('../controllers/admin');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/login', controller.login);
router.post('/addCoe', auth, controller.addCoe);
router.post('/editCoe', auth, controller.editCoe);

module.exports = router;
