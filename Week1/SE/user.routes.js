const express=require("express")
const {Signup,Signin}=require('./user.controller');
const router=express.Router();

router.post('/Signup',Signup);
router.post('/Signin',Signin);

module.exports=router;