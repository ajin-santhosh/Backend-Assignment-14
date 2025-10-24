const mongoose = require("mongoose")
const connectDB =  async () => {
  try{
      await mongoose.connect(process.env.Mongo_Url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log("DB connection successful")
  }
  catch{
        console.log("db coonection failed",error.message)
        process.exit(1)
  }
}
module.exports = connectDB