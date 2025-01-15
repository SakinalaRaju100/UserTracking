const express = require("express");
const { trackRoute, getUserRoutes } = require("../controllers/routeController");

const router = express.Router();

router.post("/track", trackRoute);
router.get("/:userId", getUserRoutes);

module.exports = router;
