import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  server_address: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getSkill(){
    return this.http.get<any>(`${this.server_address}/skill/all`)
  }
}
