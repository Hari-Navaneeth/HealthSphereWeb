import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
// Prime Modules
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
// Components
import { CommonTextInputComponent } from 'src/app/shared/components/common-text-input/common-text-input.component';
import { CommonInputComponent } from './common-input/common-input.component';
import { CommonDateInputComponent } from './common-date-input/common-date-input.component';
import { CommonDropdownInputComponent } from './common-dropdown-input/common-dropdown-input.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { CommonTextAreaInputComponent } from './common-text-area-input/common-text-area-input.component';
import { CommonAutoCompleteInputComponent } from './common-auto-complete-input/common-auto-complete-input.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonTextViewComponent } from './common-text-view/common-text-view.component';
import { PasswordModule } from 'primeng/password';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // Prime Modules
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        StepsModule,
        ToolbarModule,
        TooltipModule,
        InputTextModule,
        DynamicDialogModule,
        DialogModule,
        DropdownModule,
        InputTextareaModule,
        CalendarModule,
        PaginatorModule,
        AutoCompleteModule,
        AccordionModule,
        ConfirmPopupModule,
        ConfirmDialogModule,
        TabViewModule,
        ReactiveFormsModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [
        CommonTextInputComponent,
        CommonDateInputComponent,
        CommonDropdownInputComponent,
        CommonInputComponent,
        CommonTextAreaInputComponent,
        CommonAutoCompleteInputComponent,
        CommonTableComponent,
        CommonTextViewComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // Prime Modules
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        StepsModule,
        ToolbarModule,
        TooltipModule,
        InputTextModule,
        DynamicDialogModule,
        DialogModule,
        DropdownModule,
        InputTextareaModule,
        CalendarModule,
        PaginatorModule,
        AutoCompleteModule,
        AccordionModule,
        ConfirmPopupModule,
        ConfirmDialogModule,
        TabViewModule,
        // Components
        CommonTextInputComponent,
        CommonDateInputComponent,
        CommonDropdownInputComponent,
        CommonInputComponent,
        CommonTextAreaInputComponent,
        CommonAutoCompleteInputComponent,
        CommonTableComponent,
        AccordionModule,
        ConfirmPopupModule,
        ConfirmDialogModule,
        CommonTextViewComponent,
        ReactiveFormsModule,
        FormsModule,
        PasswordModule,
    ],
})
export class CommonFormsModule {}
