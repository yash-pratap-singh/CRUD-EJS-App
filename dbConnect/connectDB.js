const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=(url)=>{
   return mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   },console.log("Connected to DB...."))
}

module.exports=connectDB;