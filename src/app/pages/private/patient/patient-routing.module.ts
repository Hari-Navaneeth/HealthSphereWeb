import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PatientComponent, title: 'Patient List' },
            {
                path: 'add',
                component: PatientFormComponent,
                title: 'Patient Form',
            },
            {
                path: 'add/:id',
                component: PatientFormComponent,
                title: 'Edit Patient',
            },
            {
                path: 'view',
                component: ViewPatientComponent,
                title: 'View Patient',
            },
        ]),
    ],
    exports: [RouterModule],
})
export class PatientsRoutingModule {}
