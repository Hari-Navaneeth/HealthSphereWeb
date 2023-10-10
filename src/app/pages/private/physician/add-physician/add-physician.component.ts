import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonInputProperty } from 'src/app/shared/model/common-input-property.type';
import { ValidationService } from 'src/app/shared/service/validation.service';
import StatesArray from '../../../../../assets/json/states.json';
import CitiesArray from '../../../../../assets/json/cities.json';
import { SharedService } from 'src/app/shared/service/shared.service';
import { PhysicianService } from 'src/app/shared/service/physician.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-physician',
    templateUrl: './add-physician.component.html',
    styleUrls: ['./add-physician.component.scss'],
})
export class AddPhysicianComponent implements OnDestroy {
    subscription!: Subscription;

    formModel: any = {};
    loading = false;

    constructor(
        private _router: Router,
        private _physicianService: PhysicianService,
        private _validationService: ValidationService,
        private _sharedService: SharedService
    ) {}

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
        {
            label: 'Specialist',
            required: true,
            inputType: 'AutoComplete',
            id: 'specialist',
            suggestions: [
                'General',
                'Cardiologist',
                'Pediatrician',
                'Neurologist',
            ],
            validator: this._validationService.emptyValueValidator,
        },
        {
            label: 'Education',
            required: true,
            inputType: 'Text',
            id: 'education',
            validator: this._validationService.emptyValueValidator,
        },
        {
            label: 'License No',
            required: true,
            inputType: 'Text',
            id: 'licenseNo',
            validator: this._validationService.emptyValueValidator,
        },
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
            id: 'zipCode',
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
            // preAddonText: '+91',
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
            this.subscription = this._physicianService
                .addPhysician(this.formModel)
                .subscribe(
                    (result) => {
                        console.log(result);
                        this._sharedService.toast.showSuccess({
                            heading: 'Success',
                            message: result['msg'],
                        });
                        this._router.navigate([`/physician`]);
                    },
                    ({ error }) => {
                        console.log(error);
                        this._sharedService.toast.showError({
                            heading: 'Error',
                            message: error.msg,
                        });
                        this.loading = false;
                    }
                );
        }
    };

    back = () => {
        this._router.navigate(['/physician']);
    };

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
