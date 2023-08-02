const express=require('express');
const { addTransection, getTransection, editTransection, deleteTransection } = require('../controller/transectioncontrol');
//router obj
const router=express.Router();
//routes
//add transection
router.post('/add-transection',addTransection);
//edit transection
router.post('/edit-transection',editTransection);
//delete transection
router.post('/delete-transection',deleteTransection);
//add transection
router.post('/add-transection',addTransection)


//get transections
router.post('/get-transection',getTransection)

//export
module.exports=router