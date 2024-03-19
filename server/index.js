require('dotenv').config() // Secures variables
const express = require('express');
const app = express();
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')

const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contactRoutes'); // 

// Middleware to parse JSON bodies.
app.use(express.json());

async function bootstrap() {
  await mongo.connect()

  app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  app.get('/healthz', (req, res) => res.status(200).send())
  app.use('/auth', authRoutes)
  app.use('api/Contacts', contactRoutes);

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
