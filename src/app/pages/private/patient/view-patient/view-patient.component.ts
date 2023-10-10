import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewText } from 'src/app/shared/model/common-input-property.model';
import { PatientService } from 'src/app/shared/service/patient.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Component({
    selector: 'app-view-patient',
    templateUrl: './view-patient.component.html',
    styleUrls: ['./view-patient.component.scss'],
})
export class ViewPatientComponent {
    patientId: string = '';
    staffInfo: ViewText[] = [];
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _patientService: PatientService,
        private _toasterService: ToasterService
    ) {}

    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe((res: any) => {
            this.patientId = res.params.id;
            this.getStaffInfo();
        });
    }

    back = () => this._router.navigate(['/patient']);

    getStaffInfo() {
        console.log(this.patientId);
        this._patientService.getPatientById(this.patientId).subscribe(
            (res: any) => {
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
            },
            (error: HttpErrorResponse) => {
                if (error.status === 500) {
                    this._toasterService.error('Patient not found');
                    this.back();
                } else {
                    this._toasterService.error('Something went wrong');
                    this.back();
                }
            }
        );
    }
}
