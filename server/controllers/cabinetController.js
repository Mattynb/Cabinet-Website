// cabinetController.js
const Cabinet = require('../models/Cabinet'); // Update the path accordingly

exports.createCabinet = async (req, res) => {
  try {
    const cabinet = new Cabinet({
      productId: req.body.productId,
      description: req.body.description,
      price: req.body.price,
      color: req.body.color,
      type: req.body.type
    });
    const savedCabinet = await cabinet.save();
    res.status(201).send(savedCabinet);
  } catch (error) {
    res.status(400).send(error);
  }
};

// for multiple
exports.createCabinets = async (req, res) => {
    try {
      // Use insertMany to add all cabinet objects in the array
      const cabinets = await Cabinet.insertMany(req.body);
      res.status(201).send(cabinets);
    } catch (error) {
      res.status(400).send(error);
    }
  };