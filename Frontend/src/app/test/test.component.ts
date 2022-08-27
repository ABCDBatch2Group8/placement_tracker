import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmnAuthService } from '../admn-auth.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //student
  stud={
    firstname:'',
    lastname:'',
    email:''
  }
  firstname!:string
  lastname!:string
  email!:string

  //course
  Course={
    course:'',
    category:'',
    
  }
  course!:string
  caegory!:string

  user={
    email:'',
    password:'',
   }
  
  constructor(private router:Router,private admn:AdmnAuthService) { }

  ngOnInit(): void {
  }
  add(){
    alert('success');
  }
  newStudent(){
    alert('new student')
    const newstud={
      firstname:this.stud.firstname,
      lastname:this.stud.lastname,
      email:this.stud.email
    }
    this.admn.newStudent(newstud);
    this.router.navigate(['/admin'])
  }
  newCourse(){
    alert('new course')
    const newcourse={
      course:this.Course.course,
      category:this.Course.category,
      
    }
    this.admn.newCourse(newcourse);
    this.router.navigate(['/admin'])
  }
  loginAdmin(){
    this.admn.admnlogin(this.user)
    .subscribe(res=>{
      //localStorage.setItem('token',res.token)
      this.router.navigate(['admin/admn-dashboard'])
    })
  }

}
