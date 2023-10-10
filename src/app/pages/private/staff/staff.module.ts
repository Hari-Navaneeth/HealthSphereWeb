import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { SharedModule } from 'primeng/api';
import { CommonFormsModule } from 'src/app/shared/components/common-form.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

@NgModule({
    declarations: [StaffComponent, AddStaffComponent, ViewStaffComponent],
    imports: [CommonModule, StaffRoutingModule, CommonFormsModule],
    providers: [],
})
export class StaffModule {}
