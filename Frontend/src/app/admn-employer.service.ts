import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmnEmployerService {

  constructor(private http : HttpClient) { }

  getEmployers(){
    return this.http.get("http://localhost:3000/admin/employerlist");
  }

  setEmpProfile(empid:any){

    return this.http.get("http://localhost:3000/admin/employerview/"+empid);

  }
  updateEmployer(emplinfo:any){
    //alert(emplinfo.companyInfo);
    return this.http.put("http://localhost:3000/admin/updateemplinfo",emplinfo)
    .subscribe(data =>{console.log(data)})
  }

  deleteEmployer(empremid:any){
   //alert('in service');
   return this.http.delete("http://localhost:3000/admin/employerdel/"+empremid);        
  }
}
