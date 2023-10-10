import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: 'patient',
                loadChildren: () =>
                    import('./patient/patient.module').then(
                        (m) => m.PatientModule
                    ),
            },
            {
                path:'appointment',
                loadChildren:()=>
                    import('./appointment/appointment.module').then(
                        (m)=>m.AppointmentModule
                    ),
            },
            {
                path:'staff',
                loadChildren:()=>
                    import('./staff/staff.module').then(
                        (m)=>m.StaffModule
                    ),
            },
            {
                path:'physician',
                loadChildren:()=>
                    import('./physician/physician.module').then(
                        (m)=>m.PhysicianModule
                    ),
            },
            {
                path: 'error',
                loadChildren: () =>
                    import('./error/error.module').then((m) => m.ErrorModule),
            },
            {
                path: 'access',
                loadChildren: () =>
                    import('./access/access.module').then(
                        (m) => m.AccessModule
                    ),
            },
            {
                path: 'user',
                loadChildren: () =>
                    import('./user/user.module').then((m) => m.UserModule),
            },
            {
                path: 'report',
                loadChildren: () =>
                    import('./report/report.module').then(
                        (m) => m.ReportModule
                    ),
            },
            
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]),
    ],
    exports: [RouterModule],
})
export class PrivateRoutingModule {}
