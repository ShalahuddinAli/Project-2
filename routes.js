const express = require("express");
const controller = require("./controllers");
const router = express.Router();

router.get("/carpark", controller.getCarpark);
router.get("/traffic_cam", controller.getTrafficCam);

module.exports = router;
