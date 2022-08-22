const mongoose=require('mongoose');

const adminSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    designation:String
});
var adminModel=mongoose.model('admin',adminSchema);
module.exports=adminModel;