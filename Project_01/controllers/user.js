const User=require("../models/user");

async function handleGetAllUser(req,res){
    const users=await User.find({});
    res.send(users);
}
async function handleGetUserbyId(req,res){
    const users=await User.findById(req.params.id);
  if(!users)  return res.status(404).json({status:"Error"});
    res.json(users);
}
async function handleUpdateUserbyId(req,res){
    const users=await User.findByIdAndUpdate(req.params.id,{lastName:"Update Change"});
    return res.json(users);
}
async function handleDeleteUserbyId(req,res){
    const users=await User.findByIdAndDelete(req.params.id);
    return res.json(users);
}

async function handleCreateNewUser(req,res){
    const body=req.body;
    if (!body || 
        !body.first_name 
        || !body.last_name 
        || !body.email 
        || !body.gender 
        || !body.job_title) {
        return res.status(400).json({msg:"All fields are required."});
    }
    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    })
    console.log("Result",result);
   return res.status(201).json({msg:"success"});
}


module.exports={
    handleGetAllUser,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateNewUser,

}



