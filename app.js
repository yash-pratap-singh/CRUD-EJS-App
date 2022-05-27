const express=require('express');

const app=express();
const path=require('path');
const route=require('./routes/router');
const connectDB=require('./dbConnect/connectDB.js');
require('dotenv').config();


PORT=process.env.PORT||3000;

app.set("view engine","ejs");
app.use('/css',express.static(path.join(__dirname,'public')));
app.use('/js',express.static(path.join(__dirname,'public')));
app.use(express.json());

// Routes
app.use('/',route);

const start=async()=>{
     await connectDB(process.env.MONGO_URI);
    app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`));
}

start();
