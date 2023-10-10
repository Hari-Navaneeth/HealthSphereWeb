import { Component, Input } from '@angular/core';
import { CommonInputProperty } from 'src/app/shared/model/common-input-property.type';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  patientExtraInformationFields: CommonInputProperty[] = [
    {
        label: 'Weight',
        inputType: 'Decimal',
        id: 'weight',
        maxLength: 5,
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
 @Input() patientInfoModel = {
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
  phone: null,
  email: null,
  // Second Form
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
  doctor: null,
  appointmentDate: null,
};


}
