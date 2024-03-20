require('dotenv').config() // Secures variables
const express = require('express');

// module imports
const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')

// import routes
const authRoutes = require('./routes/auth')
const cabinetRoutes = require('./routes/cabinetRoutes');
const contactRoutes = require('./routes/contactRoutes');
const collectionRoutes = require('./routes/collectionRoute');

// Middleware to parse JSON bodies.
app.use(express.json());


async function bootstrap() {
  await mongo.connect()

  app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  app.get('/healthz', (req, res) => res.status(200).send())
  
  // login endpoint
  app.use('/auth', authRoutes)
  
  // endpoint for kitchen pictures whose attributes are: imgURL, title, description
  app.use('/api', collectionRoutes)
  
  // endpoint for cabinets whose attributes are: name, id, type?, description, price
  app.use('/api/cabinet', cabinetRoutes); // Mat: changed to api/cabinet for consistency //Mount the cabinet routes
  
  // endpoint for posting contact form input. Make sure to sanitize input if necessary. 
  app.use('/api/contact', contactRoutes); // Mat: changed to contact for consistency
  
  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
