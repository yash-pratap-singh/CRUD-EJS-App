const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:10,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    Status:String
})

module.exports=mongoose.model('UserDB',schema);