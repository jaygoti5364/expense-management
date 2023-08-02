const moment = require('moment/moment');
const Transmodel = require('../models/transection');

const getTransection= async (req,res)=>{
    try {
        //add range of date
         //choose types
         //add filters
        const {selectdate, filter, type}= req.body;
        const transections=await Transmodel.find({
            ...(filter !=='custom'?{
                date:{
                        $gt:moment().subtract(Number(filter),'d').toDate()
                    }
            }
            :{
                date:{
                    $gte: selectdate[0],
                    $lte: selectdate[1]
                }
            }),
            userid:req.body.userid,
            ...(type !=='all' && {type})
        });
        res.status(200).json(transections);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

const editTransection =async(req,res)=>{
try {
    await Transmodel.findOneAndUpdate({_id:req.body.tnsId}, req.body.payload);
    res.status(200).send('edit successfully');
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
}

const addTransection= async (req,res)=>{
try {
    const newtransection= new Transmodel(req.body);
    await newtransection.save()
    res.status(201).send('Transection created');
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
}

const deleteTransection= async(req,res)=>{
try {
    await Transmodel.findOneAndDelete({_id:req.body.transectionId});
    res.status(200).send('transection deleted!');
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
}
module.exports={getTransection, addTransection,editTransection, deleteTransection};

