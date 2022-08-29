const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name : {type : String,required: true},
    email :{type : String,required: true},
    dwmsid :{type : String,required: true},
    contactNo :{type : String,required: true},
    courseInICT : {type : String,required: true},
    qualification : {type : String,required: true},
    stream : {type : String,required: true},
    password : {type : String,required: true},
    // skill:{type:String}
    // non required groups below
    educationMarks:{
        Mark10:{type : String},Mark12:{type : String},QualificationMark:{type : String}},                  //input year of graduation too10thMark
    // pg : {type:Array},                       //array
     courseStatus:{type : String},             //done
     ictMarks: {type:String},
     location:{type : String},               //Ernakulam
     readyToRelocate :{type : String},           //yes

     employmentStatus : {type : String},//includes fresher better give as an array to include break duration
     careerBreak : {type : String}
    // breakDuration : {type:Number}

});
const Student = mongoose.model("Student",SignupSchema);
module.exports = Student;