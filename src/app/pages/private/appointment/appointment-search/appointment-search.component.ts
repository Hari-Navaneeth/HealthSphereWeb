import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { ILazyApiProps } from 'src/app/shared/model/lazy-api-props.model';
import { PatientService } from 'src/app/shared/service/patient.service';

@Component({
    selector: 'app-appointment-search',
    templateUrl: './appointment-search.component.html',
    styleUrls: ['./appointment-search.component.scss'],
})
export class AppointmentSearchComponent {
    isPatientTableLoading: boolean;
    searchQuery = '';

    tableData: ICommonLazyTableProps = {
        data: [],
        columns: [
            {
                header: 'Full Name',
                field: 'fullName',
                columnType: 'Text',
            },
            {
                header: 'Age',
                field: 'age',
                columnType: 'Number',
            },
            {
                header: 'Gender',
                field: 'gender',
                columnType: 'Text',
                align: 'center',
            },
            {
                header: 'Phone',
                field: 'phone',
                columnType: 'Phone',
            },
            {
                header: 'Action',
                columnType: 'Action',
                align: 'center',
                actions: [
                    {
                        icon: 'pi pi-user-plus',
                        class: 'p-button-info',
                        label: 'Add',
                    },
                ],
            },
        ],
        count: 0,
    };
    constructor(
        private _patientService: PatientService,
        private router: Router,
        private ref: DynamicDialogRef
    ) {}
    getPatients({ limit, offset }: ILazyApiProps = { limit: 10, offset: 0 }) {
        this.isPatientTableLoading = true;
        this._patientService
            .getPatients({ offset, limit, query: this.searchQuery })
            .subscribe(({ data = [], count = 0 }: any) => {
                console.log(data, count);
                this.tableData.data = JSON.parse(JSON.stringify(data));
                this.tableData.count = count;
                this.isPatientTableLoading = false;
            });
    }

    onAction(event: any) {
        switch (event.action) {
            case 'Add':
                this.addAppointment(event.rowData);
                break;
            default:
                break;
        }
    }

    addAppointment(rowData: any) {
        this.router.navigate(['/patient/add', rowData._id]);
        this.ref.close();
    }

    addPatient() {
        this.router.navigate(['/patient/add']);
        this.ref.close();
    }
}
