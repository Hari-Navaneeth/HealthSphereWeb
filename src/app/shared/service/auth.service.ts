import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.api.baseUrl;
  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    let payload = {
      username:email,
      password:password
    }
    return this.http.post(`${this.baseUrl}/auth/login`,payload);
  }
  getProfile(){
    return this.http.get(`${this.baseUrl}/auth/profile`);
  }
  resetPassword(username:string,newPassword:string){
    let payload = {
      username:username,
      newPassword:newPassword
    }
    return this.http.post(`${this.baseUrl}/auth/reset-password`,payload);
  }
}
