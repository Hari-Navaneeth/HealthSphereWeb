import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router,private toaster:ToasterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `${token ? token : ''}`,
      }
    });
    return next.handle(authRequest).pipe(tap(() => {}, (err: any) => {
      if (err.name === 'HttpErrorResponse' && err.status === 0) {
        this.router.navigate(['auth/error-page']); 
      }
      if (err.status === 401 || err.status === 403) {
         this.router.navigate(['auth/login']);
      }
      else if ( err.status == 418){
        this.toaster.error(err.error.message);
      }
    }));
  }
}
