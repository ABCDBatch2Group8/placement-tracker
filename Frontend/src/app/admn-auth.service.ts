import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdmnAuthService {

  constructor(private http:HttpClient) { }
  admnlogin(admin:any){
    return this.http.post('http://localhost:3000/admin/login',admin)
    
    
  }
}
