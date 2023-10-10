import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private massage:MessageService) { }

  success(message:string){
    this.massage.add({severity:'success', summary: 'Success', detail: message});
  }
  info(message:string){
    this.massage.add({severity:'info', summary: 'Info', detail: message});
  }
  warn(message:string){
    this.massage.add({severity:'warn', summary: 'Warn', detail: message});
  }
  error(message:string){
    this.massage.add({severity:'error', summary: 'Error', detail: message});
  }
}
