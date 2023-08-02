const  mongoose  = require("mongoose")

//schema designe
const userschema = new mongoose.Schema({
name:{
    type:String,
    required:[true,'name is required']
},
email:{
    type:String,
    required:[true,'email is required and should be unique'],
    unique:[true,'email should be unique']
},
password:{
    type:String,
    required:[true,'password is required']
}   
} ,{timestamps:true}
    );

//export
const user =mongoose.model('users',userschema)
module.exports=user