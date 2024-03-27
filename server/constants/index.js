const ORIGIN = '*'
const PORT = process.env.PORT || 8080

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://pac-admin:pac-password@cluster0.mdu0fsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const MONGO_OPTIONS = {}

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_jwt_salt"

module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
}