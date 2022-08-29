const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    jobid :{type : String},
    position :{type : String},
    jd_text :{type : String},
    number :{type : Number},
    salary :{type : String},
    location :{type : String},
    start_date :{type : Date},
    end_date :{type : Date}

})
const Jobs = mongoose.model("Jobs",JobsSchema);
module.exports = Jobs;
// position
// :
// "programmer"
// jd_text
// :
// "Need a full stack developer to work for an insurance client"
// number
// :
// 5
// salary
// :
// "3.2 to 4.8 LPA"
// location
// :
// "Mumbai"
// start_date
// :
// 2021-12-11T18:30:00.000+00:00
// end_date
// :
// 2022-09-30T18:30:00.000+00:00