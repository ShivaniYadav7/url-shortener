const express = require("express");
const router = express.Router();
const UrlController = require("../controllers/url.js");

// Index route
router.route('/').post(UrlController.createShortUrl);
router.get('/:shortUrl',UrlController.redirectUrl);

module.exports = router;