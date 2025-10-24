const express = require('express')
require('dotenv').config()
const connectDB = require("./src/config/db")
const userRoutes = require("./src/routes/userRoutes")

const app = express()
app.use(express.json())
const port = process.env.Port
connectDB()

app.use('/api/users',userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})