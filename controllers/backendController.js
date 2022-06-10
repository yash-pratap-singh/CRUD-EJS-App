const UserDB=require('../model/model');
const {StatusCodes}=require('http-status-codes');

const getAllUser=async(req,res)=>{
    const users=await UserDB.find();
    res.status(200).send(users);
}

const getUser=async(req,res)=>{
    const {id:userID}=req.params;
    const user=await UserDB.findOne({_id:userID});
    if(!user){
    return res.status(StatusCodes.NOT_FOUND).json({msg:"No such User"});
    }
    res.status(200).send(user);
}

const createUser=async(req,res)=>{
    
    const {
        body:{name, email, gender, Status}
    }=req;
    if(!name||!email||!gender||!Status){
    return res.status(400).json({msg:"No Data to Create"});
    }
    const user=await UserDB.create(req.body);
    return res.redirect('/add-user');
}

const updateUser=async(req,res)=>{
    const {
        body:{name,email,gender,status},
        params:{id:userID}
    }=req;
    if(name===''||email===''||gender===''||status==='')
    return res.status(StatusCodes.BAD_REQUEST).send({msg:"Data is required"});
    

    const user=await UserDB.findByIdAndUpdate(
        userID,req.body,{
        new:true,
        runValidators:true,
    });
    if(!user)
    return res.status(StatusCodes.NOT_FOUND).send({msg:"No such User found"});

    res.status(StatusCodes.OK).send(user);

    
}

const deleteUser=async(req,res)=>{
    const{
        params:{id:userID}
    }=req;
    const user=await UserDB.findByIdAndDelete(userID);
    if(!user)
    return res.status(StatusCodes.BAD_REQUEST).send({msg:"No Such User Exists"});

    res.status(StatusCodes.OK).send("Deleted Succesfully");
}

module.exports={
    getAllUser,getUser,createUser,updateUser,deleteUser
}