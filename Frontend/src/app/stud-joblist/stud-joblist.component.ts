import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stud-joblist',
  templateUrl: './stud-joblist.component.html',
  styleUrls: ['./stud-joblist.component.css']
})
export class StudJoblistComponent implements OnInit {
  jobs =[ {
    name:"TCS ion",
    position:"programmer",
    jd_text:"Need a full stack developer to work for an insurance client",
    numbers:5,
    salary: "3.2 - 4.8 LPA",
    location:"Mumbai",
    start_date:'1994-05-23',
    end_date:'1987-09-28',
    experience:'2-3yrs'
  },{
    name:"TCS ion",
    position:"programmer",
    jd_text:"Need a full stack developer to work for an insurance client",
    numbers:5,
    salary: "3.2 - 4.8 LPA",
    location:"Mumbai",
    start_date:'1994-05-23',
    end_date:'1987-09-28',
    experience:'2-3yrs'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
