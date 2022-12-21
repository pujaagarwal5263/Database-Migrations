const User=require("../models/user")

const getUsers=async(req,res)=>{
    try{
    let users=await User.findAll({})
    return res.status(200).json(users);
    }
    catch(err){
       console.log(err);
    }
}

const addUser=async(req,res)=>{
    try{
        let data=req.body;
        let newUser=await User.create(data);
        return res.status(200).json(newUser);
       }catch(err){
        console.log(err);
       }
}

module.exports={getUsers, addUser}

