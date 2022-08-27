import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from '../job.model';
import { JobService } from '../job.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  
  addJob = new JobModel('','','','','','',null!,null!);
  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
  }

AddJob(){
    this.jobService.newJobs(this.addJob)
    // .subscribe(
    //   (res:any) => {  
    //     alert("res.message")
    //   })
    this.router.navigate(['employer/dashboard']);
    alert ("success")
}
}
