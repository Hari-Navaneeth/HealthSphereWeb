import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { appGuard } from './app.guard';

const isLoggedIn = () => !!localStorage.getItem('token');

@NgModule({
    imports: [
        RouterModule.forRoot(
            isLoggedIn()
                ? [
                      {
                          path: '',
                          component: AppLayoutComponent,
                          loadChildren: () =>
                              import('./pages/private/private.module').then(
                                  (m) => m.PrivateModule
                              ),
                          canActivate: [appGuard],
                      },
                      { path: 'notfound', component: NotfoundComponent },
                      { path: '**', redirectTo: '/notfound' },
                  ]
                : [
                      {
                          path: '',
                          loadChildren: () =>
                              import('./pages/public/public.module').then(
                                  (m) => m.PublicModule
                              ),
                      },
                      { path: '**', redirectTo: '' },
                  ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
