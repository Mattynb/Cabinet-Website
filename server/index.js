

require('dotenv').config() // Secures variables
const express = require('express');
const cors = require('cors');

// module imports
const server = require('./utils/server') // Backend server
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')

// import routes
const authRoutes = require('./routes/auth')
const cabinetRoutes = require('./routes/cabinetRoutes');
const contactRoutes = require('./routes/contactRoutes');
const collectionRoutes = require('./routes/collectionRoute');
const newsletterRoutes = require('./routes/newsletterRoute');
const galleryRoutes = require('./routes/galleryRoutes');

// Middleware to parse JSON bodies.
server.use(express.json());

const allowedOrigin = "https://www.pac-kb.com";
const secretToken = 'your-secret-token';

const corsOptions = {
  origin: function (origin, callback) {
    if (origin === allowedOrigin || origin === "http://localhost:3000" || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Forbidden'));
      console.log('Forbidden. Origin: ', origin);
    }
  }
};

server.use(cors(corsOptions));


async function bootstrap() {
  await mongo.connect()

  server.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  server.get('/healthz', (req, res) => res.status(200).send())
  
  // login endpoint
  server.use('/auth', authRoutes)
  
  // endpoint for kitchen pictures whose attributes are: imgURL, title, description
  server.use('/api', collectionRoutes)
  
  // endpoint for cabinets whose attributes are: name, id, type?, description, price
  server.use('/api', cabinetRoutes); 

  // endpoint for posting contact form input. Make sure to sanitize input if necessary. 
  server.use('/api', contactRoutes); 

  // endpoint for newsletter subscription. Make sure to sanitize input if necessary.
  server.use('/api', newsletterRoutes);

  // endpoint for gallery images
  server.use('/api', galleryRoutes);

  server.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })

  // log all
  server.on('connection', () => {
    console.log('New connection')
  })

  // log errors
  server.on('error', (error) => {
    console.error('Server error:', error)
  })

  // Graceful shutdown
  process.on('SIGINT', async () => {
    await mongo.disconnect()
    process.exit(0)
  })
}

bootstrap()