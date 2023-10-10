import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  {
    path: '',
    component:StaffComponent
  },
  {
    path:'add',
    component:AddStaffComponent
  },
  {
    path:'view/:id',
    component:ViewStaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
