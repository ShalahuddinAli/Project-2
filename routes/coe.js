const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/coe');

router.get('/getCoe', controller.getCoe);
router.post('/addCoe', auth, controller.addCoe);
router.patch('/editCoe', auth, controller.editCoe);

module.exports = router;
