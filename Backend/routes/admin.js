const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();


const adminModel=require('../models/subadmin');
const ictkStudModel=require('../models/ictkdb');
const courseModel=require('../models/course');
const employerModel=require('../models/employer')
const candidateModel=require('../models/candidates')


router.get('/',(req,res)=>{
    res.send('Admin');
})

//ADMIN LOGIN

router.post('/login',async(req,res)=>{
    try{
    
        const email=req.body.email;
        const password=req.body.password;
        console.log(email)
        console.log(password)
        const admindata=await adminModel.findOne({email:email})
        console.log('........usermail.....')
        console.log(admindata.email)
        console.log(admindata.password)
        if(admindata.password===password)
        {
            
            //let payload = {subject:email+password}
            //let token=jwt.sign(payload,'secretkey')
            //res.status(200).send({token});
            console.log('validated');
            res.json({success:true,msg:'validated'})
        }
        else
        {
            //res.send('password not matching');
            console.log('pwd not matching')
            res.json({success:false,msg:'password not matching'})
        }
    }
    catch(error)
    {
        //res.status(400).send("invalid email");
        console.log('invalid email')
        res.json({success:false,msg:'invalid email'})
    }
    
})

//ADMIN SIGN UP

router.post('/signup',(req,res)=>{
   const newAdmin={
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    designation:req.body.designation
   }
   var subadmin=new adminModel(newAdmin);
   subadmin.save();
   })


   //LIST SUBADMINS

   router.get('/admins',(req,res)=>{
    adminModel.find().then(function(admins){
        res.send(admins);

    });

    });

    //DELETE SUB ADMIN

    router.delete('/delete/:id',(req,res)=>{
   
        id = req.params.id;
        adminModel.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      })

      //CREATE ICTK STUDENT EMAIL ID

      router.post('/addictkstudent',(req,res)=>{
        const newstud={
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            
           }
           var student=new ictkStudModel(newstud);
           student.save();

      })

      //SHOW  ICTAK STUDENTS LIST

      router.get('/students',(req,res)=>{
        ictkStudModel.find().then(function(students){
            res.send(students);
    
        });
    
        });
        //DELETE ICTAK STUDENT

        router.delete('/deletestudent/:id',(req,res)=>{
   
            id = req.params.id;
            ictkStudModel.findByIdAndDelete({"_id":id})
            .then(()=>{
                                 console.log('success')
                res.send();
            })
          })
            
// CREATE ICTK COURSE LIST
router.post('/course',(req,res)=>{
    const newCourse={
        course:req.body.course
    }
    var Course=new courseModel(newCourse);
    Course.save();
});

//SHOW COURSES

router.get('/showcourse',(req,res)=>{
    courseModel.find().then(function(courses){
        res.send(courses);

    });

    });
//DELETE COURSE

router.delete('/deletecourse/:id',(req,res)=>{
    id=req.params.id;
    courseModel.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
        })

})

//GET STUDENT CANDIDATES LIST
router.get('/candidatelist',(req,res)=>{
    res.header("Access-Control-Allow-origin","*");
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS");
    candidateModel.find().then(function(candidates){
        res.send(candidates);

    });
});

// GET EMPLOYER LIST
router.get('/employerlist',(req,res)=>{
    res.header("Access-Control-Allow-origin","*");
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS");
    employerModel.find().then(function(employer){
        res.send(employer);

    });
});

//GET EMPLOYER PROFILE
router.get('/employerview/:id',function(req,res){
    const id = req.params.id;
    //console.log(id);
    employerModel.findOne({_id: id})
      .then((empview)=>{
          res.send(empview);
      });    
});

//DELETE EMPLOYER ACCOUNT
router.delete('/employerdel/:id',function(req,res){
    const id = req.params.id;
    //console.log(id);
    employerModel.findByIdAndDelete({"_id":id})
    .then(()=>{
        //console.log('delete success')
        //res.send();
        employerModel.find().then(function(employer){
            res.send(employer);    
        });
    })
    
});


//UPDATE EMPLOYER INFO
router.put('/updateemplinfo',(req,res)=>{    
    //console.log(req.body.companyInfo)
    id=req.body._id,
    title= req.body.title,
    phone = req.body.phone,
    gstin = req.body.gstin,
    companyInfo = req.body.companyInfo
    
    employerModel.findByIdAndUpdate({"_id":id},
                                {$set:{"title":title,
                                "phone":phone,
                                "gstin":gstin,
                                "companyInfo":companyInfo}})
   .then(function(){
       res.send();
   })
 })

module.exports=router;