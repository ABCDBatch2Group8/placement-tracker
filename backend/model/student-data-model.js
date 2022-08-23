const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name : {type : String},
    email :{type : String},
    dwmsid :{type : String},
    contactNo :{type : Number},
    courseInICT : {type : String},
    qualification : {type : String},
    stream : {type : String},
    password : {type : String}
    // non required groups below
    // marks_10th:{type:Number},
    // marks_12th:{type:Number},
    // graduation:{type:Array},  //input year of graduation too
    // pg : {type:Array},
    // ict_cource_status:{type : String},
    // ict_marks: {type:Number},
    // location:{type : String},
    // readyToRelocate :{type : String},
    // employment_status : {type : String},//includes fresher better give as an array to include break duration
    // careerBreak : {type : String},
    // breakDuration : {type:Number}

});
const Student = mongoose.model("Student",SignupSchema);
module.exports = Student;