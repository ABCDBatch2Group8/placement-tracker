const mongoose=require('mongoose');

const ictkStudSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String
});
var ictkStudModel=mongoose.model('ictkstudent',ictkStudSchema);
module.exports=ictkStudModel;