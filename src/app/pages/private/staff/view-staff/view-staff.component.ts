import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService,DynamicDialogRef} from 'primeng/dynamicdialog';
import { ViewText } from 'src/app/shared/model/common-input-property.model';
import { ResetPasswordComponent } from 'src/app/shared/popup/reset-password/reset-password.component';
import { StaffService } from 'src/app/shared/service/staff.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Component({
    selector: 'app-view-staff',
    templateUrl: './view-staff.component.html',
    styleUrls: ['./view-staff.component.scss'],
})
export class ViewStaffComponent {
    staffId: string = '';
    staffInfo: ViewText[] = [];
    ref: DynamicDialogRef | undefined;
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _staffService: StaffService,
        private toasterService: ToasterService,
        public dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe((res: any) => {
            this.staffId = res.params.id;
            this.getStaffInfo();
        });
    }
    getStaffInfo() {
        console.log(this.staffId);
        this._staffService
            .getStaff(this.staffId)
            .subscribe((res: any) => {
                const {
                    firstName,
                    lastName,
                    gender,
                    age,
                    email,
                    phoneNumber,
                    address,
                    state,
                    city,
                    zip,
                } = res;
                this.staffInfo = [
                    {
                        key: 'Name',
                        value: firstName + ' ' + lastName,
                    },
                    {
                        key: 'Gender',
                        value: gender,
                    },
                    {
                        key: 'Age',
                        value: age,
                    },
                    {
                        key: 'Email',
                        value: email,
                    },
                    {
                        key: 'Phone',
                        value: phoneNumber,
                    },
                    {
                        key: 'Address',
                        value: address,
                    },
                    {
                        key: 'City',
                        value: city,
                    },
                    {
                        key: 'State',
                        value: state,
                    },
                    {
                        key: 'Zip',
                        value: zip,
                    },
                ];
            },(error:HttpErrorResponse)=>{
              if(error.status === 500){
                this.toasterService.error('Staff not found');
                this._router.navigate(['/staff']);
              }
              else{
                this.toasterService.error('Something went wrong');
                this._router.navigate(['/staff']);
              }
            });
    }
    back = () => this._router.navigate(['/staff']);
    resetPassword = () => {
      this.ref = this.dialogService.open(ResetPasswordComponent, {
        header: 'Reset Password',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        data:{
          id:this.staffId
        }
      });
    };
}
