var express = require("express");
var router = express.Router();
var HomeController = require("../controllers/HomeController");

router.use(HomeController.home);

module.exports = router;