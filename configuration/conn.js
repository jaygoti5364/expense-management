
const mongoose =require('mongoose');
const colors = require('colors');

const conn = async () => {
 try {
    await mongoose.connect(process.env.DB);
   //  console.log(colors.green('server running on' + mongoose.connect(process.env.host)));
    const { host } = mongoose.connection;
  console.log(colors.green('server running on', host));
 } catch (error) {
    console.log(colors.red.underline(error))
 }
}

module.exports =conn 
