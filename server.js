const cors=require("cors");
const morgan=require("morgan");
const express=require("express");
const dotenv=require("dotenv");
const colors=require("colors");
const conn = require("./configuration/conn");
const path =require('path');

//.env configuration
dotenv.config();

//database connection
conn();

//rest object
const app =express();

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routs
//user routs
app.use('/api/v2/users', require('./routs/userroute'))

//transection routs
app.use('/api/v2/transections', require('./routs/transection'));

//static files
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*',function (req,res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
//port
const Port=8080 || process.env.PORT


//listining server
app.listen(Port,()=>{
    console.log(colors.yellow('server running on port' + Port));
})