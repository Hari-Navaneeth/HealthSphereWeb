import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicianComponent } from './physician.component';
import { AddPhysicianComponent } from './add-physician/add-physician.component';
import { ViewPhysicianComponent } from './view-physician/view-physician.component';
import { EditPhysicianComponent } from './edit-physician/edit-physician.component';

const routes: Routes = [
    {
        path: '',
        component: PhysicianComponent,
    },
    {
        path: 'add',
        component: AddPhysicianComponent,
    },
    {
        path: 'view/:id',
        component: ViewPhysicianComponent,
    },
    {
        path: 'edit/:id',
        component: EditPhysicianComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhysicianRoutingModule {}
