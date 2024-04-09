// newsletterRoutes.js
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/NewsLetter');

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email is valid and handle any additional validation
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error subscribing:', error);
    return res.status(500).json({ message: 'Failed to subscribe', error: error.message });
  }
});

module.exports = router;