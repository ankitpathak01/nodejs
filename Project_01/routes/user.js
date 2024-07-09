const express=require("express");

const{handleGetAllUser,
    handleGetUserbyId,
    handleUpdateUserbyId,
    handleDeleteUserbyId,
    handleCreateNewUser}=require("../controllers/user");

const router=express.Router();

router.route("/").get(handleGetAllUser).post(handleCreateNewUser);

router.route("/:id").get(handleGetUserbyId)
.patch(handleUpdateUserbyId)
.delete(handleDeleteUserbyId);

module.exports=router;