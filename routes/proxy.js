const express = require('express');

const controller = require('../controllers/proxy');

const router = express.Router();

router.get('/carpark/:location', controller.getCarpark);
router.get('/traffic_cam', controller.getTrafficCam);
router.get('/traffic_news', controller.getTrafficNews);

module.exports = router;
