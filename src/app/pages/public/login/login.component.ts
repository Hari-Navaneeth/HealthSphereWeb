import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    valCheck: string[] = ['remember'];
    loginForm: FormGroup | any;

    password!: string;

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private auth: AuthService,
        private toaster: ToasterService
    ) {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            // email: new FormControl('admin@gmail.com'),
            // password: new FormControl('Welcome#23'),
            email: new FormControl(''),
            password: new FormControl(''),
        });
    }
    login() {
        this.auth
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(
                (data) => {
                    console.log(data);
                    localStorage.setItem('token', data['token']);
                    location.reload();
                    this.router.navigate(['/']);
                },
                (err: HttpErrorResponse) => {
                    console.log(err);
                    if (err.status === 401) {
                        this.toaster.error('Invalid Credentials');
                    } else {
                        this.toaster.error('Something went wrong');
                    }
                }
            );
    }
}
