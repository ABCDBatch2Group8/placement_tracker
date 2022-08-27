import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpModel } from '../emp.model';
import { EmpService } from '../emp.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  EmpProf = new EmpModel('','','','','','');

  constructor(private empService: EmpService, private router: Router) { }

  ngOnInit(): void {
    let empId = localStorage.getItem("EmpId");
    this.empService.empProf(empId).subscribe((data:any)=>{
      this.EmpProf = JSON.parse(JSON.stringify(data));
    })
    
  }
  editProf(){
    console.log("In editProf")
    this.empService.EdProf(this.EmpProf);
    // localStorage.removeItem("EmpId")
    // To be removed when logging out
    alert("success");
    this.router.navigate(['/employer/dashboard'])

  }

}
