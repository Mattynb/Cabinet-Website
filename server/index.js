require('dotenv').config() // Secures variables
const express = require('express');
const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')
const authRoutes = require('./routes/auth')
const collectionRoutes = require('./routes/collectionRoute');

async function bootstrap() {
  await mongo.connect()

  app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  app.get('/healthz', (req, res) => res.status(200).send())
  app.use('/auth', authRoutes)
  app.use('/api', collectionRoutes)

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
