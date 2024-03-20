const express = require('express');
const router = express.Router();
const { FramedCollection, FramelessCollection } = require('../models/Collections');

// Get method for framed collection
const getFramedCollection = async (req, res) => {
  try {
    const framedCollection = await FramedCollection.find({});
    res.json(framedCollection);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching framed collection');
  }
};

// Get method for frameless collection
const getFramelessCollection = async (req, res) => {
  try {
    const framelessCollection = await FramelessCollection.find({});
    res.json(framelessCollection);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching frameless collection');
  }
};

// Routes for fetching collections
router.get('/collection/framed', getFramedCollection);
router.get('/collection/frameless', getFramelessCollection);

module.exports = router;

