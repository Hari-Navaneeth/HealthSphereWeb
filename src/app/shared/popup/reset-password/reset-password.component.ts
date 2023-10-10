import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  formGroup:FormGroup= new FormGroup({});
  username: string = '';
  loading: boolean = false;
  constructor(private toaster:ToasterService,private auth:AuthService,private config: DynamicDialogConfig) { }
  ngOnInit(): void {
    this.username = this.config.data.id
    this.formGroup = new FormGroup({
      
        password: new FormGroup(''),
        confirmPassword: new FormGroup('')
      
    });
  }
  resetPassword = () => {
    this.loading = true;
    if(this.formGroup.value.password !== this.formGroup.value.confirmPassword){
      this.toaster.error('Password and Confirm Password must be same');
      this.loading = false;
      return;
    }
    this.auth.resetPassword(this.username,this.formGroup.value.password).subscribe((res: any) => {
      this.loading = false;
      this.toaster.success('Password Reset Successfully');
    },(err:HttpErrorResponse)=>{
      this.loading = false;
      this.toaster.error(err.error.message);
    }
    );
  }

}
