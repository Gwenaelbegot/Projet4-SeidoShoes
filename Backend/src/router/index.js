const express = require("express");

const router = express.Router();

const advertRoutes = require("./advertRouter");

router.use("/advert", advertRoutes);

module.exports = router;