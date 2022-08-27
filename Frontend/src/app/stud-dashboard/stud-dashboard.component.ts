import { Component, OnInit } from '@angular/core';
import { StudAuthService } from '../stud-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stud-dashboard',
  templateUrl: './stud-dashboard.component.html',
  styleUrls: ['./stud-dashboard.component.css']
})
export class StudDashboardComponent implements OnInit {
  dashboard={
     name : '', 
    email: '', 
    dwmsid : '',
    contactNo :'',
    courseInICT : '',
    qualification :'', 
    stream :'',
    password:''
  }

  constructor(private router:Router,private _auth:StudAuthService) { }

  ngOnInit(): void {
    let Id = localStorage.getItem("stud-id");
    this._auth.stud_dashboard(Id).subscribe((data:any)=>{
      this.dashboard = JSON.parse(JSON.stringify(data));
      console.log("hai")
      console.log(this.dashboard)
     

    })
  }

}
