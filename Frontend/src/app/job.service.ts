import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  server_address: string = 'http://localhost:5000';

  constructor( private http: HttpClient) { }

  newJobs(addjob: any) {
    console.log("addemp", addjob)
    return this.http.post<any>(`${this.server_address}/job/jobpost`, { "Job": addjob })
    .subscribe(res =>{
      console.log("res is", res);
    })
    }


}


