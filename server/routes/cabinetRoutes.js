const express = require('express');
const router = express.Router();
const Cabinet = require('../models/Cabinet');

// Route to get all cabinets
router.get('/cabinets', async (req, res) => {
    try {
      const cabinets = await Cabinet.find();
      res.json(cabinets);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Route to get a single cabinet by productId
router.get('/cabinets/:productId', async (req, res) => {
    try {
      const cabinet = await Cabinet.findOne({ productId: req.params.productId });
      if (!cabinet) {
        return res.status(404).json({ message: 'Cabinet not found' });
      }
      res.json(cabinet);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Route to get a single cabinet's description by productId
router.get('/cabinets/:productId/description', async (req, res) => {
    try {
      const cabinet = await Cabinet.findOne({ productId: req.params.productId });
      if (!cabinet) {
        return res.status(404).json({ message: 'Cabinet not found' });
      }
      res.json({ description: cabinet.description });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Route to get a single cabinet's price by productId
router.get('/cabinets/:productId/price', async (req, res) => {
    try {
      const cabinet = await Cabinet.findOne({ productId: req.params.productId });
      if (!cabinet) {
        return res.status(404).json({ message: 'Cabinet not found' });
      }
      res.json({ price: cabinet.price });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// Route to get a single cabinet's color by productId
router.get('/cabinets/:productId/color', async (req, res) => {
    try {
      const cabinet = await Cabinet.findOne({ productId: req.params.productId });
      if (!cabinet) {
        return res.status(404).json({ message: 'Cabinet not found' });
      }
      // Extract the color
      const { color } = cabinet;
      res.json({ color });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  // Route to get a single cabinet's type by productId
router.get('/cabinets/:productId/type', async (req, res) => {
    try {
      const cabinet = await Cabinet.findOne({ productId: req.params.productId });
      if (!cabinet) {
        return res.status(404).json({ message: 'Cabinet not found' });
      }
      // Extract the type
      const { type } = cabinet;
      res.json({ type });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
module.exports = router;