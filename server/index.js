

require('dotenv').config() // Secures variables
const express = require('express');

// module imports
const server = require('./utils/server') // Backend server
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')

// import routes
const authRoutes = require('./routes/auth')
const cabinetRoutes = require('./routes/cabinetRoutes');
const contactRoutes = require('./routes/contactRoutes');
const collectionRoutes = require('./routes/collectionRoute');

// Middleware to parse JSON bodies.
server.use(express.json());


async function bootstrap() {
  await mongo.connect()

  server.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  server.get('/healthz', (req, res) => res.status(200).send())

  // login endpoint
  server.use('/auth', authRoutes)
  
  // endpoint for kitchen pictures whose attributes are: imgURL, title, description
  server.use('/api', collectionRoutes)
  
  // endpoint for cabinets whose attributes are: name, id, type?, description, price
  server.use('/api', cabinetRoutes); // Mat: changed to /api for consistency //Mount the cabinet routes
  
  // endpoint for posting contact form input. Make sure to sanitize input if necessary. 
  server.use('/api', contactRoutes); // Mat: changed to /api for consistency
  
  server.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()