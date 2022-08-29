const mongoose = require("mongoose");
const { schema } = require("./student-data-model");
const Schema = mongoose.Schema;

const CourselistingSchema =new Schema({
    course :{type:String},
    category:{type:String}
})
const Course = mongoose.model("Course",CourselistingSchema);
module.exports = Course;