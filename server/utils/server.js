const express = require('express') // Backend server
const cors = require('cors') // HTTP headers (enable requests)
const morgan = require('morgan') // HTTP logger
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies. 
const cabinetController = require('../controllers/cabinetController');
const { ORIGIN } = require('../constants')

// initialize app
const app = express()

// middlewares
app.use(cors({ origin: ORIGIN }))
app.use(express.json({ extended: true })) // body parser
app.use(express.urlencoded({ extended: false })) // url parser
app.use(morgan('dev')) // logger
app.use(bodyParser.json()); // Middleware to parse JSON bodies.


// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

// routes
app.post('/api/cabinet', cabinetController.createCabinet);
app.post('/api/cabinets', cabinetController.createCabinets);
module.exports = app
