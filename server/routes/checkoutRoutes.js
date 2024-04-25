const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout/checkoutController');

// Endpoint to handle order placement
router.post('/sendEmailOnCheckout', checkoutController.sendEmailOnCheckout);

module.exports = router;
