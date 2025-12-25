const express = require("express");
const router = express.Router();
const UrlController = require("../controllers/url.js");

// Index route
router.route('/').post(UrlController.createShortUrl);

module.exports = router;