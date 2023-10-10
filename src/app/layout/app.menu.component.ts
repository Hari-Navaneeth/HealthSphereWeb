import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: MenuItem[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        const baseRoute = '';
        this.model = [
            {
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: [`${baseRoute}/dashboard`],
                    },
                    {
                        label: 'Patient',
                        icon: 'pi pi-fw pi-users',
                        routerLink: [`${baseRoute}/patient`],
                    },
                    {
                        label: 'Appointment',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: [`${baseRoute}/appointment`],
                    },
                    {
                        label: 'Staff Management',
                        icon: 'pi pi-fw pi-users',
                        routerLink: [`${baseRoute}/staff`],
                    },
                    {
                        label: 'Doctor Management',
                        icon: 'pi pi-fw pi-users',
                        routerLink: [`${baseRoute}/physician`],
                    },
                    {
                        label: 'Report',
                        icon: 'pi pi-fw pi-chart-line',
                        routerLink: [`${baseRoute}/report`],
                    },
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Account Info',
                                icon: 'pi pi-fw pi-home',
                                routerLink: [`${baseRoute}/user/profile`],
                            },
                        ],
                        expanded: false,
                    },
                    {
                        label:'Configuration',
                        icon:'pi pi-fw pi-cog',
                        items:[
                            {
                                label:'Clinic',
                                icon:'pi pi-fw pi-location',
                                routerLink:[`${baseRoute}/space`]
                            }
                        ]
                    }
                ],
            },
        ];
    }
}
