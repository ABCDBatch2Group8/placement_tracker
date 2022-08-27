const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:String,
    email:String,
    dwmsid:String,
    contactNo:String,
    courseInICT:String,
    qualification:String,
    stream:String,
    password:String
});
var candidateModel=mongoose.model('student',studentSchema);
module.exports=candidateModel;