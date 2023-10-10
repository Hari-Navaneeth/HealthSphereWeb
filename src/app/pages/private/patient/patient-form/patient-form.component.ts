import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { CommonInputProperty } from 'src/app/shared/model/common-input-property.type';
import { ValidationService } from 'src/app/shared/service/validation.service';
import StatesArray from '../../../../../assets/json/states.json';
import CitiesArray from '../../../../../assets/json/cities.json';
import { SharedService } from 'src/app/shared/service/shared.service';
import { PatientService } from 'src/app/shared/service/patient.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppointmentService } from 'src/app/shared/service/appointment.service';
import { PhysicianService } from 'src/app/shared/service/physician.service';

@Component({
    selector: 'app-patient-form',
    templateUrl: './patient-form.component.html',
    styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
    personalInfoSubmitted = false;
    activeStepIndex = 0;
    getSteps = () => {
        const command = (event: MenuItemCommandEvent) =>
            (this.activeStepIndex = event.index);
        const disabled = !this.personalInfoSubmitted;
        return [
            {
                label: 'Personal Info',
                command,
            },
            {
                label: 'Info',
                command,
                disabled,
            },
            {
                label: 'Done',
                command,
                disabled,
            },
        ] as MenuItem[];
    };
    patientInfoModel = {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        age: null,
        gender: null,
        // Contact Info
        address: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNumber: null,
        email: null,
        // Second Form
        weight: null,
        bloodGroup: null,
        mlc: null,
        broughtBy: null,
        identificationMark: null,
        initialResponse: null,
        triage: null,
        gcs: null,
        bp: null,
        heartRate: null,
        sp02: null,
        respiratoryRate: null,
        temperature: null,
        allergy: null,
        allergyDetails: null,
        // Third Form
        physicianId: null,
        appointmentDate: new Date(),
    };
    patientPersonalInformationFields: CommonInputProperty[] = [
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
            required: true,
            validator: this._validationService.emptyValueValidator,
        },
    ];
    patientAddressField: CommonInputProperty = {
        label: 'Address',
        required: true,
        inputType: 'TextArea',
        id: 'address',
        rows: 2,
        validator: this._validationService.stringValidator,
        maxLength: 500,
    };
    patientContactInformationFields: CommonInputProperty[] = [
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
            inputType: 'Text',
            id: 'email',
            validator: this._validationService.emailValidator,
            preAddon: 'pi-envelope',
        },
    ];
    patientExtraInformationFields: CommonInputProperty[] = [
        {
            label: 'Weight',
            inputType: 'Decimal',
            id: 'weight',
            // maxLength: 5,
            postAddonText: 'kg',
        },
        {
            label: 'Blood Group',
            inputType: 'Dropdown',
            id: 'bloodGroup',
            options: ['A +', 'A -', 'B +', 'B -', 'AB +', 'AB -', 'O +', 'O -'],
            optionTypeStr: true,
        },
        {
            label: 'MLC No.',
            inputType: 'Text',
            id: 'mlc',
        },
        {
            label: 'Brought by',
            inputType: 'Text',
            id: 'broughtBy',
        },
        {
            label: 'Identification Mark',
            inputType: 'Text',
            id: 'identificationMark',
        },
        {
            label: 'Initial Response',
            inputType: 'Dropdown',
            id: 'initialResponse',
            options: [
                'Alert',
                'Responding to Verbal Stimuli',
                'Responds to Pain',
                'Unresponsive',
            ],
            optionTypeStr: true,
        },
        {
            label: 'Triage',
            inputType: 'Dropdown',
            id: 'triage',
            options: [1, 2, 3],
            optionTypeStr: true,
        },
        {
            label: 'GCS',
            inputType: 'Text',
            id: 'gcs',
        },
        {
            label: 'BP',
            inputType: 'Text',
            id: 'bp',
        },
        {
            label: 'Heart Rate (HR)',
            inputType: 'Text',
            id: 'heartRate',
        },
        {
            label: 'SP02',
            inputType: 'Text',
            id: 'sp02',
        },
        {
            label: 'Respiratory Rate (RR)',
            inputType: 'Text',
            id: 'respiratoryRate',
        },
        {
            label: 'Temperature (Temp)',
            inputType: 'Text',
            id: 'temperature',
        },
        {
            label: 'GRBS',
            inputType: 'Text',
            id: 'grbs',
        },
        {
            label: 'Allergy',
            inputType: 'Dropdown',
            id: 'allergy',
            options: ['Food', 'Drug', 'Blood', 'Unknown'],
        },
        {
            label: 'Allergy Details',
            inputType: 'TextArea',
            id: 'allergyDetails',
        },
    ];
    patientDoctorInformationFields: any[] = [
        {
            id: 'physicianId',
            label: 'Doctor',
            inputType: 'Dropdown',
            options: [],
            required: true,
        },
        {
            label: 'Appointment Date',
            inputType: 'Date',
            id: 'appointmentDate',
            required: true,
        },
    ];
    submitTried = false;
    patientId: string = '';
    constructor(
        private _router: Router,
        private _validationService: ValidationService,
        private _sharedService: SharedService,
        private _patientService: PatientService,
        private _activatedRoute: ActivatedRoute,
        private _toasterService: ToasterService,
        private _appointmentService: AppointmentService,
        private _physicianService: PhysicianService
    ) {}

    ngOnInit() {
        // this.getDoctors();
        this._activatedRoute.paramMap.subscribe((res: any) => {
            this.patientId = res.params.id;
            if (this.patientId) {
                this.getPatientInfo();
            }
        });
    }

    getDoctors() {
        this._physicianService
            .getAllPhysicianId()
            .subscribe((res: any[] = []) => {
                this.patientDoctorInformationFields[0].options = res.map(
                    (option) => ({
                        value: option._id,
                        label: [
                            option.firstName,
                            option.lastName,
                            '-',
                            option.specialist,
                        ].join(' '),
                    })
                );
                if (
                    this.patientDoctorInformationFields[0].options.length === 1
                ) {
                    this.patientInfoModel.physicianId =
                        this.patientDoctorInformationFields[0].options[0].value;
                    this.patientInfoModel.appointmentDate = new Date();
                }
                // console.log(this.patientDoctorInformationFields);
            });
    }

    getPatientInfo() {
        this._patientService
            .getPatientById(this.patientId)
            .subscribe((res: any) => {
                if (res) {
                    this.patientInfoModel = res;
                    this.patientInfoModel.dateOfBirth = moment(
                        res.dateOfBirth
                    ).toDate();
                    this.patientInfoModel.age = String(
                        this._sharedService.calculateAge(res.dateOfBirth)
                    );
                    this.activeStepIndex = 1;
                    this.personalInfoSubmitted = true;
                }
            });
    }

    validator = (property: CommonInputProperty) => {
        let check = true;
        const value = this.patientInfoModel[property.id];
        if (property.required && property.validator) {
            if (property.validator(value)) {
                property.invalid = false;
            } else {
                property.invalid = true;
                check = false;
            }
        }
        if (property.id === 'email') {
            if (value && property.validator) {
                if (property.validator(value)) {
                    property.invalid = false;
                } else {
                    property.invalid = true;
                    check = false;
                }
            } else {
                property.invalid = false;
            }
        }
        console.log(property, value, check);
        return check;
    };

    updateModel = (value: any, property: CommonInputProperty) => {
        if (property.id === 'dateOfBirth') {
            if (value) {
                this.patientInfoModel.age = String(
                    this._sharedService.calculateAge(value)
                );
            } else {
                this.patientInfoModel.age = null;
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
        switch (this.activeStepIndex) {
            case 0:
                this.patientPersonalInformationFields.forEach(validator);
                validator(this.patientAddressField);
                this.patientContactInformationFields.forEach(validator);
                break;
            case 1:
                break;
            case 2:
                this._router.navigate([`/appointment`]);
                break;
        }
        return check;
    };

    submit = () => {
        this.submitTried = true;
        const valid = this.validate();

        if (valid) {
            this.submitTried = false;
            switch (this.activeStepIndex) {
                case 0:
                    this.personalInfoSubmitted = false;
                    this.savePersonalInfo();
                    this.activeStepIndex++;
                    break;
                case 1:
                    this.activeStepIndex++;
                    break;
                case 2:
                    this.createAppointment();
                    break;
            }
        }
    };

    createAppointment() {
        let payload = {
            patientId: this.patientId,
            physicianId: this.patientInfoModel.physicianId,
            weight: this.patientInfoModel.weight,
            bloodGroup: this.patientInfoModel.bloodGroup,
            mlc: this.patientInfoModel.mlc,
            broughtBy: this.patientInfoModel.broughtBy,
            identificationMark: this.patientInfoModel.identificationMark,
            appointmentDate: this.patientInfoModel.appointmentDate,
            initialResponse: this.patientInfoModel.initialResponse,
            triage: this.patientInfoModel.triage,
            gcs: this.patientInfoModel.gcs,
            bp: this.patientInfoModel.bp,
            heartRate: this.patientInfoModel.heartRate,
            sp02: this.patientInfoModel.sp02,
            respiratoryRate: this.patientInfoModel.respiratoryRate,
            temperature: this.patientInfoModel.temperature,
            allergy: this.patientInfoModel.allergy,
            allergyDetails: this.patientInfoModel.allergyDetails,
        };
        this._appointmentService.createAppointment(payload).subscribe(
            (res: any) => {
                this._toasterService.success(
                    'Appointment created successfully'
                );
                this._router.navigate([`/appointment`]);
            },
            (err: HttpErrorResponse) => {
                this._toasterService.error('Something went wrong');
                this._router.navigate([`/appointment`]);
            }
        );
    }

    savePersonalInfo() {
        let payload = {
            firstName: this.patientInfoModel.firstName,
            lastName: this.patientInfoModel.lastName,
            dateOfBirth: this.patientInfoModel.dateOfBirth,
            age: this.patientInfoModel.age,
            gender: this.patientInfoModel.gender,
            address: this.patientInfoModel.address,
            city: this.patientInfoModel.city,
            state: this.patientInfoModel.state,
            zipCode: this.patientInfoModel.zipCode,
            // phone: this.patientInfoModel.phone,
            email: this.patientInfoModel.email,
            phoneNumber: this.patientInfoModel.phoneNumber,
        };
        if (this.personalInfoSubmitted) {
            this._patientService
                .updatePatient(this.patientId, payload)
                .subscribe(
                    (res: any) => {
                        this._toasterService.success(
                            'Patient updated successfully'
                        );
                    },
                    (err: HttpErrorResponse) => {
                        this._toasterService.error('Something went wrong');
                    }
                );
            return;
        } else {
            this._patientService.createPatient(payload).subscribe(
                (res: any) => {
                    this.patientId = res._id;
                    this._toasterService.success(
                        'Patient created successfully'
                    );
                    this._router.navigate([`/patient/add/${res._id}`]);
                },
                () => {
                    this._toasterService.error('Something went wrong');
                }
            );
        }
    }

    back = () => this.activeStepIndex--;

    onStepChange = (step: number) => {
        switch (step) {
            case 2:
                this.getDoctors();
                break;

            default:
                break;
        }
    };
}
