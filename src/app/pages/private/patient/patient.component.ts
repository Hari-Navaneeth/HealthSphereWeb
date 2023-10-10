import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { ICommonTableColumn } from 'src/app/shared/model/common-table-column.model';
import { CommonTableEventType } from 'src/app/shared/model/common-table-event.type';
import { ILazyApiProps } from 'src/app/shared/model/lazy-api-props.model';
import { PatientService } from 'src/app/shared/service/patient.service';

@Component({
    templateUrl: './patient.component.html',
})
export class PatientComponent implements OnInit, OnDestroy {
    subscription!: Subscription;

    searchQuery = '';
    tableData: ICommonLazyTableProps = {
        data: [],
        columns: [
            {
                header: 'First Name',
                field: 'firstName',
                columnType: 'Text',
            },
            {
                header: 'Last Name',
                field: 'lastName',
                columnType: 'Text',
            },
            {
                header: 'Email',
                field: 'email',
                columnType: 'Text',
                align: 'center',
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
                field: 'phoneNumber',
                columnType: 'Phone',
            },
            {
                header: 'Action',
                columnType: 'Action',
                align: 'center',
                actions: [
                    {
                        icon: 'pi pi-eye',
                        class: 'p-button-info',
                        label: 'View',
                    },
                ],
            },
        ],
        count: 0,
    };
    isPatientTableLoading: boolean = false;

    constructor(
        private _patientService: PatientService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getPatients();
    }

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
        
    onAction(event: CommonTableEventType) {
        switch (event.action) {
            case 'View':
                this.router.navigate(['/patient/view', event.rowData._id || '1']);
                break;
            default:
                break;
        }
    }

    ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
