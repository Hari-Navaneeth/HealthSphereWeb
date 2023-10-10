import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CommonFormsModule } from 'src/app/shared/components/common-form.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';

@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFormComponent,
    AppointmentViewComponent,
    AppointmentHistoryComponent,
    AppointmentSearchComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    TableModule,
    StepsModule,
    ToolbarModule,
    TooltipModule,
    InputTextModule,
    DynamicDialogModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    CommonFormsModule
  ]
})
export class AppointmentModule { }
