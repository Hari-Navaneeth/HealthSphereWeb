import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { ILazyApiProps } from 'src/app/shared/model/lazy-api-props.model';
import { PhysicianService } from 'src/app/shared/service/physician.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Component({
    selector: 'app-physician',
    templateUrl: './physician.component.html',
    styleUrls: ['./physician.component.scss'],
})
export class PhysicianComponent implements OnInit {
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
                header: 'Specialist',
                field: 'specialist',
                columnType: 'Text',
            },
            {
                header: 'Email',
                field: 'email',
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
                    {
                      icon: 'pi pi-pencil',
                      class: 'p-button-warning',
                      label: 'Edit',
                    },
                    {
                      icon: 'pi pi-trash',
                      class: 'p-button-danger',
                      label: 'Delete',
                    }
                  ],
            },
        ],
        count: 0,
    };

    constructor(
        private _physicianService: PhysicianService,
        private router: Router,
        //private confirmationService: ConfirmationService,
        private toasterService:ToasterService
    ) {}
    ngOnInit(): void {
        this.getPhysician();
    }
    getPhysician = (event: ILazyApiProps = { limit: 10, offset: 0 }) => {
        this._physicianService
            .getPhysicians(event)
            .subscribe(({ data, count }: any) => {
                console.log(data, count);
                this.tableData.data = JSON.parse(JSON.stringify(data));
                this.tableData.count = count;
            });
    };
    addPhysician = () => this.router.navigate(['/physician/add']);
    viewPhysician = ({ _id: id }) =>
        this.router.navigate(['/physician/view', id]);
    editPhysician = ({ _id: id }) =>
        this.router.navigate(['/physician/edit', id]);

    onActionClick = (event:any) => {
        console.log(event);
        
        switch (event.action) {
            case 'View':
                this.viewPhysician(event.rowData);
                break;
            case 'Edit':
                this.editPhysician(event.rowData);
                break;
            case 'Delete':
                this.deletePhysician(event.rowData);
                break;
            default:
                break;
        }
    };
    deletePhysician = ({ _id: id }) => {
        // this.confirmationService.confirm({
        //     message: 'Do you want to delete this record?',
        //     header: 'Delete Confirmation',
        //     icon: 'pi pi-info-circle',
        //     accept: () => {
        //         this.toasterService.success('Record deleted successfully')
        //     },
        //     reject: (type) => {
        //         switch (type) {
        //             case ConfirmEventType.REJECT:
        //                 this.toasterService.error('Record deletion failed')
        //                 break;
        //             case ConfirmEventType.CANCEL:
        //                 this.toasterService.error('You have rejected')
        //                 break;
        //         }
        //     }

        // });

        this._physicianService.deletePhysician(id).subscribe((res: any) => {
            this.getPhysician();
        },(err:any)=>{
            this.toasterService.error(err.error.message)
        });
    };
}
