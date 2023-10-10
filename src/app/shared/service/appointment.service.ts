import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl:string = environment.api.baseUrl;
  constructor(private http:HttpClient) { }

  getAppointment(page:number,limit:number){
    return this.http.get(`${this.baseUrl}/appointment?offset=${page}&limit=${limit}`);
  }
  createAppointment(data:any){
    return this.http.post(`${this.baseUrl}/appointment`,data);
  }
  getAppointmentById(id:string){
    return this.http.get(`${this.baseUrl}/appointment/${id}`);
  }

}
