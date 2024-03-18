// routes/contactRoutes.js
// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Adjust the path as necessary

// POST route for creating a new contact entry
router.post('/', async (req, res) => {
  try {
    const { name, email, category, message, createdAt } = req.body;
    const newContact = new Contact({
      name,
      email,
      category,
      message,
      createdAt
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err .message });
  }
});

module.exports = router;