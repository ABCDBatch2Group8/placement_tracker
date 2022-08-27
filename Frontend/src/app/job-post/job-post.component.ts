import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { JobModel } from '../job.model';
import { JobService } from '../job.service';
import { SkillService } from '../skill.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  dropdownList: any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings={};
  
  addJob = new JobModel('','','','','','',null!,null!);
  constructor(private jobService: JobService, private skillService: SkillService,private router: Router) { }

  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];


    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   limitSelection:3,
    //   allowSearchFilter: true
    // };
    this.skillService.getSkill().subscribe((data:any)=>{
      this.dropdownList = JSON.parse(JSON.stringify(data));
    })
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
