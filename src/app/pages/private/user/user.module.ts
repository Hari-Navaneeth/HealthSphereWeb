import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonFormsModule } from 'src/app/shared/components/common-form.module';
import { PopupModule } from 'src/app/shared/popup/popup.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonFormsModule,
    PopupModule
  ]
})
export class UserModule { }
