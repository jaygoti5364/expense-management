const express=require('express');
const { logincontroller, registercontroller } = require('../controller/usercontrol');
//router obj
const router=express.Router();
//routers
//login
router.post('/login',logincontroller)

//register
router.post('/register',registercontroller)
//export
module.exports=router