import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGOURI = process.env.MONGO_URI

function connectDB() {
  if (!MONGOURI) {
    console.error('MONGO_URI is not defined in environment variables.')
    return
  }

  mongoose
    .connect(MONGOURI)
    .then(() => {
      console.log('MongoDB connected successfully')
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err)
    })
}

export default connectDB
