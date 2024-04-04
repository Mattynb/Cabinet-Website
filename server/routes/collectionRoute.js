const express = require('express');
const getFramedCollection = require('../controllers/collection/get-framed-collection');
const getFramelessCollection = require('../controllers/collection/get-frameless-collection');
const router = express.Router();


router.get('/collection/framed', getFramedCollection);
router.get('/collection/frameless', getFramelessCollection);

module.exports = router;