const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)
const morgan = require('morgan') // HTTP logger
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies. 
const createCabinet = require('../controllers/cabinet/create-cabinet');
const createCabinets = require("../controllers/cabinet/create-cabinets")

const { ORIGIN } = require('../constants')

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Successfully connected to MongoDB Atlas.'))
//   .catch(err => console.error('Connection error:', err));

// initialize app
const app = express()

// middlewares
app.use(cors({ origin: ORIGIN }))
app.use(express.json({ extended: true })) // body parser
app.use(express.urlencoded({ extended: false })) // url parser
app.use(morgan('dev')) // logger

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

// routes
app.post('/api/cabinet', createCabinet);
app.post('/api/cabinets', createCabinets);
module.exports = app
