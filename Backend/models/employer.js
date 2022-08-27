const mongoose=require('mongoose');

const employerSchema=mongoose.Schema({
    title:String,
    email:String,
    phone:String,
    password:String,
    gstin:String,
    companyInfo:String
});
var employerModel=mongoose.model('employer',employerSchema);
module.exports=employerModel;