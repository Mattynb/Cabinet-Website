const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)
const morgan = require('morgan') // HTTP logger

const authRoutes = require('../routes/auth');
// const cabinetRoutes = require('./routes/cabinetRoutes');
const contactRoutes = require('../routes/contactRoutes');


const { ORIGIN } = require('../constants')
const helmet = require('helmet');

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Successfully connected to MongoDB Atlas.'))
//   .catch(err => console.error('Connection error:', err));

// initialize app
const app = express()

// middlewares
app.use(helmet());
app.use(cors({ origin: ORIGIN }))
app.use(express.json({ extended: true })) // body parser
app.use(express.urlencoded({ extended: false })) // url parser
app.use(morgan('dev')) // logger


// Use routes
app.use('/auth', authRoutes);
// app.use('/api/cabinets', cabinetRoutes); // Correct the route path if necessary
app.use('/api/contact', contactRoutes); // This is where you would define the contact route
//app.use('/api/collections', collectionRoutes);

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('An error occured')// no need to call next if we send error message
  //next()
})

module.exports = app