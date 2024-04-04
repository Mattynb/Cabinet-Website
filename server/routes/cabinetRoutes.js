const express = require('express');
const router = express.Router();
const Cabinet = require('../models/Cabinet');
const getAllCabinets = require('../controllers/cabinet/get-all-cabinets');
const getCabinetDescById = require('../controllers/cabinet/get-cabinet-desc-by-id');
const getCabinetById = require('../controllers/cabinet/get-cabinet-by-id');
const getCabinetPriceById = require('../controllers/cabinet/get-cabinet-price-by-id');
const getCabinetColorById = require('../controllers/cabinet/get-cabinet-color-by-id');
const getCabinetTypeById = require('../controllers/cabinet/get-cabinet-type-by-id');

// Route to get all cabinets
router.get('/cabinets', getAllCabinets);

// Route to get a single cabinet by productId
router.get('/cabinets/:productId', getCabinetById);

// Route to get a single cabinet's description by productId
router.get('/cabinets/:productId/description', getCabinetDescById);

// Route to get a single cabinet's price by productId
router.get('/cabinets/:productId/price', getCabinetPriceById);

// Route to get a single cabinet's color by productId
router.get('/cabinets/:productId/color', getCabinetColorById);

// Route to get a single cabinet's type by productId
router.get('/cabinets/:productId/type', getCabinetTypeById);

module.exports = router;