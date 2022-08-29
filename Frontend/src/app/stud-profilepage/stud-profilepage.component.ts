import { Component, OnInit } from '@angular/core';
import { StudAuthService } from '../stud-auth.service';
import { Router } from '@angular/router';
import { studModel } from '../stud-model';

@Component({
  selector: 'app-stud-profilepage',
  templateUrl: './stud-profilepage.component.html',
  styleUrls: ['./stud-profilepage.component.css']
})
export class StudProfilepageComponent implements OnInit {
  // Signin={
  //   name : '', 
  //   email: '', 
  //   dwmsid : '',
  //   contactNo :'',
  //   courseInICT : '',
  //   qualification :'', 
  //   stream :'',
  //   password:''
  // };
  Signin= new studModel('','','', '','','','','');

  Course=[{
    course :'',
    category:''
  }]

  constructor(private router:Router,private _auth:StudAuthService) { }

  ngOnInit(): void {
    this._auth.course().subscribe((data:any)=>{
      this.Course=JSON.parse(JSON.stringify(data));
      console.log(data)
  })

    let Id = localStorage.getItem("stud-id");
    this._auth.stud_dashboard(Id).subscribe((data:any)=>{
      this.Signin = JSON.parse(JSON.stringify(data));
      console.log("hai")
      console.log(this.Signin)
     

    })
  }
  editProf(){
    console.log("In editProf")
    this._auth.EditProfile(this.Signin);
    // localStorage.removeItem("EmpId")
    // To be removed when logging out
    // alert("success");
     this.router.navigate(['/student/dashboard/updatepg2'])

  }

}