import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import TariffModel from './models/tariffModel.js'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
app.use(cors())

connectDB()

//Api for fetching data
app.get('/tarif-details', async (req, res) => {
  try {
    const data = await TariffModel.find()
    console.log(data)

    if (data.length === 0) {
      res.status(400).json({ message: 'Unavailable to fetch data' })
    }
    res.status(200).json(data)
    console.log(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
