import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { ICommonTableColumn } from 'src/app/shared/model/common-table-column.model';
import { CommonTableEventType } from 'src/app/shared/model/common-table-event.type';
import { ILazyApiProps } from 'src/app/shared/model/lazy-api-props.model';
import { StaffService } from 'src/app/shared/service/staff.service';
// import { StaffService } from 'src/app/shared/service/staff.service';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
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
                      icon:"pi pi-trash",
                      class:"p-button-danger",
                      label:"Delete"
                    }
                ],
            },
        ],
        count: 0,
    };
    searchQuery = '';
    isStaffTableLoading: boolean = false;

    constructor(private staffService: StaffService, private router: Router) {}
    ngOnInit(): void {
        this.getStaff();
    }

    getStaff = (event: ILazyApiProps = { limit: 10, offset: 0 }) => {
        this.isStaffTableLoading = true;
        this.staffService
            .getStaffs({
                limit: event.limit,
                offset: event.offset,
            })
            .subscribe(
                ({ data, count }: any) => {
                    console.log(data, count);
                    this.isStaffTableLoading = false;
                    this.tableData.data = JSON.parse(JSON.stringify(data));
                    this.tableData.count = count;
                },
                (error) => {
                    this.isStaffTableLoading = false;
                }
            );
    };

    addStaff = () => this.router.navigate(['/staff/add']);

    onAction(event: CommonTableEventType) {
        switch (event.action) {
            case 'View':
                this.router.navigate(['/staff/view', event.rowData._id || '1']);
                break;
            case 'Delete':
                this.deleteStaff(event.rowData._id || '1');
                break;
            default:
                break;
        }
    }
    deleteStaff(id:string){
      this.staffService.deleteStaff(id).subscribe((res:any)=>{
        console.log(res);
        this.getStaff();
      })
    }
}
