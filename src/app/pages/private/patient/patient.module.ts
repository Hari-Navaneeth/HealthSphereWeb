import { NgModule } from '@angular/core';
import { PatientsRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { CommonFormsModule } from 'src/app/shared/components/common-form.module';
import { ViewPatientComponent } from './view-patient/view-patient.component';

@NgModule({
    imports: [
        CommonFormsModule,
        PatientsRoutingModule,
    ],
    declarations: [
        PatientComponent,
        PatientFormComponent,
        ViewPatientComponent,
    ],
})
export class PatientModule {}
