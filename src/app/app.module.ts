import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';

// PrimeNg
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedService } from './shared/service/shared.service';
import { MessageService } from 'primeng/api';
import { GraphQLModule } from './graphql.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/service/api.service';
import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ReactiveFormsModule,
        ToastModule,
        GraphQLModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [DialogService, MessageService, SharedService,{
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }],
    bootstrap: [AppComponent],
})
export class AppModule {}
