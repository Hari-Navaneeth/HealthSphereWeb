import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicianRoutingModule } from './physician-routing.module';
import { PhysicianComponent } from './physician.component';
import { CommonFormsModule } from 'src/app/shared/components/common-form.module';
import { AddPhysicianComponent } from './add-physician/add-physician.component';
import { ViewPhysicianComponent } from './view-physician/view-physician.component';
import { EditPhysicianComponent } from './edit-physician/edit-physician.component';


@NgModule({
  declarations: [
    PhysicianComponent,
    AddPhysicianComponent,
    ViewPhysicianComponent,
    EditPhysicianComponent,
  ],
  imports: [
    CommonFormsModule,
    PhysicianRoutingModule
  ]
})
export class PhysicianModule { }
