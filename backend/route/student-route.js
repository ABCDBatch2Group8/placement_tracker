const express = require("express");
const route = express.Router();
const Student = require("../model/student-data-model");
const IctkStudent = require("../model/ictk-student-model")
const Course = require("../model/course-list-model.js")
const jwt = require('jsonwebtoken');

route.post("/signin",(req,res)=>{
    // res.send("hello")
    let data = {
      name : req.body.data.name,
      email :req.body.data.email,
      dwmsid :req.body.data.dwmsid,
      contactNo : req.body.data.contactNo,
      courseInICT : req.body.data.courseInICT,
      qualification : req.body.data.qualification ,
      stream :req.body.data.stream,
      password : req.body.data.password
  } 
  console.log(data.email);
    IctkStudent.findOne({"email":data.email}, function(err,val){
      if(err){
        console.log(err);
      }
       if(val === null){
        console.log("no email found");
        res.json({status: "no email found"});
      }
      else{
        {
          console.log("data found in admin db")  
              
          Student.find({"email":data.email}, function(err,docs){
            console.log(docs)
            if(err){
              console.log(err);
            }
            else if(docs.length){       
              console.log("User exists");
                res.json({status: "User Email already registered"});
            }
            else{
              let stud = new Student(data);
              stud.save();
              res.json({status: "Success"});                    
            }         
        }); 
        }
      }
      })
})

route.get("/signin",(req,res)=>{
    Course.find().then(function(course){
      res.send(course);
    })
})

route.post('/login', (req, res) => {
    Student.findOne({'email' :req.body.email},function(err, user){
      if(user=== null){
        console.log("no data found")
        res.json({status: "invalid"});
        // res.json({status: "user doesnot exist"});
      }
      else if(err) {
        console.log('LOGIN ERROR RESPONSE')
        res.json(err)
    }
     else if((user.email == req.body.email)&&(user.password == req.body.password )){
          console.log("correct");
          // let payload = {subject: user.email + user.password};
          // let token = jwt.sign(payload, 'secretKey');
          // res.status(200).send({token});
          res.json({"message":"Login successful","status":"success","id":user._id});
    }
    else {
      console.log(" wrong details");
      res.json({status: "invalid"});
    }
  });              
     
})

route.get('/dashboard/:id',async (req,res)=>{
  console.log(req.params);
  try{
    const id = req.params.id;
    const stud_data = await Student.findById({"_id":id}); 
    res.json(stud_data);
    console.log("student data"+stud_data);
}catch(err){
    console.log("profile data not correct");
    res.json({message: "data not fetched"})
}
});


route.put('/dashboard/update', async (req, res) => {
  console.log("in update ");
  // console.log(req.body); 
  console.log(req.body._id);   
  
  try{
  await Student.findByIdAndUpdate({"_id":req.body._id},
           {$set:{"name":req.body.name,
                  "email":req.body.email,
                  "dwmsid":req.body.dwmsid,
                  "contactNo":req.body.contactNo,
                  "courseInICT":req.body.courseInICT,
                  "password": req.body.password,      
                  "qualification": req.body.qualification,
                  "stream": req.body.stream
           }}
  )}catch(err){
      console.log("In error /update")
      res.json({ message: err });
   }   
}); 
// @@@@@@@@@@@second page@@@@@@@@@@@

route.put('/dashboard/update2', async (req, res) => {
  console.log("in update ");
  // console.log(req.body); 
  console.log(req.body._id);   
  
  try{
  await Student.findByIdAndUpdate({"_id":req.body._id},
           {$set:{"courseStatus":req.body.courseStatus,
                  "ictMarks":req.body.ictMarks,
                  "location":req.body.location,
                  "readyToRelocate":req.body.readyToRelocate,
                  "employmentStatus":req.body.employmentStatus,
                  "careerBreak": req.body.careerBreak ,
                  'educationMarks.Mark10':req.body.educationMarks.Mark10,
                  'educationMarks.Mark12':req.body.educationMarks.Mark12,
                   'educationMarks.QualificationMark':req.body.educationMarks.QualificationMark,
      
           }}
  )}catch(err){
      console.log("In error /update2")
      res.json({ message: err });
   }   
}); 


module.exports = route;
    
   
