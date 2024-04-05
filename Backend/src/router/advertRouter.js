const express = require("express");
const router = express.Router();
const { getAll, createAdvert } = require("../controller/advertController");

router.get("/", getAll);

//post http://localhost:4000/api/new-advert/
router.post("/", createAdvert);

module.exports = router;
