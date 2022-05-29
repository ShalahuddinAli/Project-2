const express = require('express');

const auth = require('../middleware/auth');
const controller = require('../controllers/coe');

const router = express.Router();

router.get('/getAllCoe', controller.getAllCoe);
router.get('/getCoe', controller.getCoe);
router.post('/addCoe', auth, controller.addCoe);
router.patch('/editCoe', auth, controller.editCoe);

module.exports = router;
