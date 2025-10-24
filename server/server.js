const express = require('express')
require('dotenv').config()
const cors = require("cors");
const connectDB = require("./src/config/db")
const userRoutes = require("./src/routes/userRoutes")


const app = express()
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())
const port = process.env.Port
connectDB()

app.use('/api/users',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})