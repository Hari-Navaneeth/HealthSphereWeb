import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonInputProperty } from 'src/app/shared/model/common-input-property.type';
import { SharedService } from 'src/app/shared/service/shared.service';
// import { StaffService } from 'src/app/shared/service/staff.service';
import { ValidationService } from 'src/app/shared/service/validation.service';
import StatesArray from '../../../../../assets/json/states.json';
import CitiesArray from '../../../../../assets/json/cities.json';
import { StaffService } from 'src/app/shared/service/staff.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-add-staff',
    templateUrl: './add-staff.component.html',
    styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent {
    subscription!: Subscription;

    formModel: any = {};
    loading = false;

    formControls1: CommonInputProperty[] = [
        {
            label: 'First Name',
            required: true,
            inputType: 'Name',
            id: 'firstName',
            validator: this._validationService.nameValidator,
        },
        {
            label: 'Last Name',
            required: true,
            inputType: 'Name',
            id: 'lastName',
            validator: this._validationService.nameValidator,
        },
        {
            label: 'Date of Birth',
            inputType: 'Date',
            required: true,
            id: 'dateOfBirth',
            maxDate: new Date(),
            validator: (value) =>
                this._validationService.dateValidator(value) &&
                value < new Date(),
        },
        {
            label: 'Age',
            inputType: 'Name',
            id: 'age',
            disabled: true,
            maxLength: 3,
            validator: this._validationService.numberValidator,
        },
        {
            label: 'Sex',
            inputType: 'Dropdown',
            options: ['Male', 'Female', 'Other'],
            optionTypeStr: true,
            id: 'gender',
            validator: this._validationService.emptyValueValidator,
        },
        // {
        //   label: 'Education',
        //   required: true,
        //   inputType: 'Text',
        //   id: 'education',
        //   validator: this._validationService.emptyValueValidator,
        // },
    ];
    addressControl: CommonInputProperty = {
        label: 'Address',
        required: true,
        inputType: 'TextArea',
        id: 'address',
        rows: 2,
        validator: this._validationService.stringValidator,
        maxLength: 500,
    };
    formControls2: CommonInputProperty[] = [
        {
            label: 'City',
            required: true,
            inputType: 'AutoComplete',
            id: 'city',
            validator: this._validationService.stringValidator,
            suggestions: CitiesArray,
        },
        {
            label: 'State',
            required: true,
            inputType: 'Dropdown',
            id: 'state',
            validator: this._validationService.emptyValueValidator,
            options: StatesArray,
        },
        {
            label: 'Zip',
            required: true,
            inputType: 'Number',
            id: 'zip',
            maxLength: 6,
            validator: this._validationService.zipCodeValidator,
        },
        {
            label: 'Phone',
            required: true,
            inputType: 'Number',
            id: 'phoneNumber',
            maxLength: 10,
            validator: this._validationService.phoneValidator,
            preAddon: 'pi-phone',
        },
        {
            label: 'Email',
            required: true,
            inputType: 'Text',
            id: 'email',
            validator: this._validationService.emailValidator,
            preAddon: 'pi-envelope',
        },
    ];
    constructor(
        private _router: Router,
        private _staffService: StaffService,
        private _validationService: ValidationService,
        private _sharedService: SharedService
    ) { }
    submitTried = false;

    validator = (property: CommonInputProperty) => {
        let check = true;
        const value = this.formModel[property.id];
        if (property.required && property.validator) {
            if (property.validator(value)) {
                property.invalid = false;
            } else {
                property.invalid = true;
                check = false;
            }
        }
        console.log(property, value, check);
        return check;
    };

    updateModel = (value: any, property: CommonInputProperty) => {
        if (property.id === 'dateOfBirth') {
            if (value) {
                this.formModel.age = String(
                    this._sharedService.calculateAge(value)
                );
            } else {
                this.formModel.age = null;
            }
        }
        if (this.submitTried) {
            this.validator(property);
        }
    };

    validate = () => {
        let check = true;
        const validator = (property: CommonInputProperty) => {
            if (!this.validator(property)) check = false;
        };
        this.formControls1.forEach(validator);
        validator(this.addressControl);
        this.formControls2.forEach(validator);
        return check;
    };
    submit = () => {
        this.submitTried = true;
        const valid = this.validate();
        if (valid) {
            this.loading = true;
            const formData = JSON.parse(JSON.stringify(this.formModel));
            this._staffService.addStaff(formData).subscribe((res: any) => {
                this.loading = false;
                this._router.navigate(['/staff']);
            }, (error: HttpErrorResponse) => {
                this.loading = false;
                console.log(error);
                if (error.status === 409) {
                    this._sharedService.toast.showWarn({
                        heading: 'Error',
                        message: 'Staff already exists',
                    });
                }
                else if (error.status === 500) {
                    this._sharedService.toast.showWarn({
                        heading: 'Error',
                        message: error.error.error,
                    });
                }
                else {
                    this._sharedService.toast.showWarn({
                        heading: 'Error',
                        message: 'Something went wrong',
                    });
                }
            }
            );
        }
    };

    back = () => {
        this._router.navigate(['/staff']);
    };

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
