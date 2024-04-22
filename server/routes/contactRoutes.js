const express = require('express');
const handleReceivedMessage = require('../controllers/contact/handle-received-message');
const router = express.Router();


// POST route for creating a new contact entry
router.post('/contact', handleReceivedMessage);

module.exports = router;