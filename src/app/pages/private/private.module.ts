import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { ApiService } from 'src/app/shared/service/api.service';

@NgModule({
    imports: [CommonModule, PrivateRoutingModule],
    providers: [ApiService],
})
export class PrivateModule {}
