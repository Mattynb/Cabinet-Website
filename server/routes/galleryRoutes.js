const express = require('express');
const getAllGalleryImages  = require('../controllers/gallery/get-all-gallery-images');
const getAllFramedGalleryImages = require('../controllers/gallery/get-all-framed');
const getAllFramelessGalleryImages = require('../controllers/gallery/get-all-frameless');
const router = express.Router();


// GET route for getting all gallery images
router.get('/gallery', getAllGalleryImages);

// GET route for getting all framed gallery images
router.get('/gallery/framed', getAllFramedGalleryImages);

// GET route for getting all frameless gallery images
router.get('/gallery/frameless', getAllFramelessGalleryImages);

module.exports = router;