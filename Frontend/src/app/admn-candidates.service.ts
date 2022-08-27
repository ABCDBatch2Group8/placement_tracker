import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmnCandidatesService {

  constructor(private http : HttpClient) { }

  getStudents(){
    return this.http.get("http://localhost:3000/admin/candidatelist");
  }
}
