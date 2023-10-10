import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { CommonTableEventType } from 'src/app/shared/model/common-table-event.type';
import { AppointmentService } from 'src/app/shared/service/appointment.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';
import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
    tableData: ICommonLazyTableProps = {
        data: [],
        columns: [
            {
                header: 'Patient',
                field: 'patientName',
                columnType: 'Text',
            },
            {
                header: 'Doctor',
                field: 'PhysicianName',
                columnType: 'Text',
                align: 'center',
            },
            {
                header: 'Status',
                field: 'StatusName',
                columnType: 'Text',
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
                    {
                        icon: 'pi pi-pencil',
                        class: 'p-button-warning',
                        label: 'Edit',
                    },
                    {
                        icon: 'pi pi-trash',
                        class: 'p-button-danger',
                        label: 'Delete',
                    },
                ],
            },
        ],
        count: 0,
    };
    isAppointmentTableLoading: boolean = false;

    ref: DynamicDialogRef | undefined;

    constructor(
        private appointService: AppointmentService,
        private toasterService: ToasterService,
        private router: Router,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.getAppointment();
    }

    getAppointment(data?: any) {
        this.isAppointmentTableLoading = true;
        this.appointService.getAppointment(0, 10).subscribe(
            (res: any) => {
                this.isAppointmentTableLoading = false;
                let data = [];
                res.data.forEach((element: any) => {
                    data.push({
                        _id: element._id,
                        patientId: element.patientId._id,
                        patientName:
                            element.patientId.firstName +
                            ' ' +
                            element.patientId.lastName,
                        PhysicianName:
                            element.physicianId.firstName +
                            ' ' +
                            element.physicianId.lastName,
                        StatusName: element.statusId ? element.statusId : '',
                    });
                });
                this.tableData.data = data;
                this.tableData.count = res.data.length;
            },
            (error) => {
                this.toasterService.error(error.error.message);
                this.isAppointmentTableLoading = false;
            }
        );
    }

    deleteAppointment() {
        console.log('delete appointment');
    }

    onAction(event: CommonTableEventType) {
        console.log(event);
        switch (event.action) {
            case 'View':
                this.viewAppointment(event.rowData);
                break;
            case 'Edit':
                this.editAppointment(event.rowData);
                break;
            case 'Delete':
                this.deleteAppointment();
                break;
        }
    }

    viewAppointment(data: any) {
        console.log(data);
        this.router.navigate([
            `/appointment/view/${data.patientId}/${data._id}`,
        ]);
    }

    editAppointment(data: any) {
        console.log(data);
    }

    addAppointment = () => {
        this.ref = this.dialogService.open(AppointmentSearchComponent, {
            header: 'Select Patirnt',
            width: '70%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true,
        });

        // this.ref.onClose.subscribe((product: Product) => {
        //     if (product) {
        //         this.messageService.add({
        //             severity: 'info',
        //             summary: 'Product Selected',
        //             detail: product.name,
        //         });
        //     }
        // });

        // this.ref.onMaximize.subscribe((value) => {
        //     this.messageService.add({
        //         severity: 'info',
        //         summary: 'Maximized',
        //         detail: `maximized: ${value.maximized}`,
        //     });
        // });
    };
}
