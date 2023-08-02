const user = require('../models/user')

//for login callback
const logincontroller= async (req,res)=>{
try {
    const {email,password}=req.body;
    const oneuser = await user.findOne({email,password})
    if(!oneuser){
       return res.status(404).send('user not found');
        }
        res.status(200).json({
            success:true,
            oneuser
        })
    }
 catch (error) {
    res.status(400).json({
        success:false,
        error})
}
}


//for register callback
const registercontroller= async (req,res)=>{
    try {

        // const {name,email,password}=req.body;
        const newuser = new user(req.body);
        await newuser.save()
       
            res.status(201).json({
                success:true,
                newuser
            })
        }
     catch (error) {
        res.status(400).json({
            success:false,
            error})
    }
}


module.exports={logincontroller , registercontroller}