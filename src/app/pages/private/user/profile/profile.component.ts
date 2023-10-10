import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ViewText } from 'src/app/shared/model/common-input-property.model';
import { ResetPasswordComponent } from 'src/app/shared/popup/reset-password/reset-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileData:ViewText[]=[
    {
      key:'Name',
      value:'Sachin'
    },
    {
      key:'Email',
      value:'',
    }
  ];
  ref : any;

  constructor(private dialogService:DialogService) { }
  back = () => console.log('Back');
  resetPassword = () => {
    this.ref = this.dialogService.open(ResetPasswordComponent, {
      header: 'Reset Password',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: {
        id: '51gF3'
    },
    });
  };

}
