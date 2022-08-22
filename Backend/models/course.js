const mongoose=require('mongoose');

const couseSchema=mongoose.Schema({
    course:String
});
var courseModel=mongoose.model('course',couseSchema);
module.exports=courseModel;