import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';

const routes: Routes = [
  {
    path:'',
    component:AppointmentComponent,
  },
  {
    path:'add',
    component:AppointmentFormComponent,
  },
  {
    path:'view/:patientId/:id',
    component:AppointmentViewComponent,
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
