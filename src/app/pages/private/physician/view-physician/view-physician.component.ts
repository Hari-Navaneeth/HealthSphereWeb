import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { Subscription } from 'rxjs';
import { PhysicianService } from 'src/app/shared/service/physician.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
    selector: 'app-view-physician',
    templateUrl: './view-physician.component.html',
    styleUrls: ['./view-physician.component.scss'],
})
export class ViewPhysicianComponent implements OnInit, OnDestroy {
    subscription: Subscription[] = [];

    formModel: any = {};
    loading = false;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _physicianService: PhysicianService,
        private _sharedService: SharedService
    ) {}
    formControls1 = [
        {
            label: 'First Name',
            field: 'firstName',
        },
        {
            label: 'Last Name',
            field: 'lastName',
        },
        {
            label: 'Date of Birth',
            field: 'dateOfBirth',
        },
        {
            label: 'Age',
            field: 'age',
        },
        {
            label: 'Sex',
            field: 'gender',
        },
        {
            label: 'Specialist',
            field: 'specialist',
        },
        {
            label: 'Education',
            field: 'education',
        },
        {
            label: 'License No',
            field: 'licenseNo',
        },
        {
            label: 'Address',
            field: 'address',
        },
        {
            label: 'City',
            field: 'city',
        },
        {
            label: 'State',
            field: 'state',
        },
        {
            label: 'Zip',
            field: 'zipCode',
        },
        {
            label: 'Phone',
            field: 'phoneNumber',
        },
        {
            label: 'Email',
            field: 'email',
        },
    ];

    ngOnInit(): void {
        this.loading = true;
        this.subscription.push(
            this._activatedRoute.params.subscribe((param) => {
                this.loading = false;
                this.subscription.push(
                    this._physicianService
                        .getPhysician(param)
                        .subscribe((result) => {
                            this.formModel = JSON.parse(JSON.stringify(result));
                            this.formModel.dateOfBirth = new Date(
                                this.formModel.dateOfBirth
                            );
                            this.formModel.age =
                                this._sharedService.calculateAge(
                                    this.formModel.dateOfBirth
                                );
                            this.formModel.dateOfBirth = moment(this.formModel.dateOfBirth).format("Do MMMM YYYY")
                            this.formModel.id = String(param['id']);
                        })
                );
            })
        );
    }

    edit = () =>
        this._router.navigate(['/physician', 'edit', this.formModel.id]);

    back = () => this._router.navigate(['/physician']);

    ngOnDestroy(): void {
        if (this.subscription && this.subscription.length > 0) {
            this.subscription.forEach((subscription) =>
                subscription.unsubscribe()
            );
        }
    }
}
