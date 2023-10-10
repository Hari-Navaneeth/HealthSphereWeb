import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonInputProperty } from 'src/app/shared/model/common-input-property.type';
import { ValidationService } from 'src/app/shared/service/validation.service';
import StatesArray from '../../../../../assets/json/states.json';
import CitiesArray from '../../../../../assets/json/cities.json';
import { PatientService } from 'src/app/shared/service/patient.service';
import { ToasterService } from 'src/app/shared/service/toaster.service';
import { ICommonLazyTableProps } from 'src/app/shared/model/common-lazy-table-props.model';
import { CommonTableEventType } from 'src/app/shared/model/common-table-event.type';
import { DialogService } from 'primeng/dynamicdialog';
import { AppointmentHistoryComponent } from '../appointment-history/appointment-history.component';
import { AppointmentService } from 'src/app/shared/service/appointment.service';

const disabled = true;

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.scss'],
})
export class AppointmentViewComponent {
  patientAddressField: CommonInputProperty = {
    label: 'Address',
    required: true,
    inputType: 'TextArea',
    id: 'address',
    rows: 2,
    validator: this._validationService.stringValidator,
    maxLength: 500,
    disabled,
  };

  patientContactInformationFields: CommonInputProperty[] = [
    {
      label: 'City',
      required: true,
      inputType: 'AutoComplete',
      id: 'city',
      validator: this._validationService.stringValidator,
      suggestions: CitiesArray,
      disabled,
    },
    {
      label: 'State',
      required: true,
      inputType: 'Dropdown',
      id: 'state',
      validator: this._validationService.emptyValueValidator,
      options: StatesArray,
      disabled,
    },
    {
      label: 'Zip',
      required: true,
      inputType: 'Number',
      id: 'zipCode',
      maxLength: 6,
      validator: this._validationService.zipCodeValidator,
      disabled,
    },
    {
      label: 'Phone',
      required: true,
      inputType: 'Number',
      id: 'phone',
      maxLength: 10,
      validator: this._validationService.phoneValidator,
      preAddon: 'pi-phone',
      // preAddonText: '+91',
      disabled,
    },
    {
      label: 'Email',
      inputType: 'Text',
      id: 'email',
      validator: this._validationService.emailValidator,
      preAddon: 'pi-envelope',
      disabled,
    },
  ];
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
    disabled,
  };

  patientPersonalInformationFields: CommonInputProperty[] = [
    {
      label: 'First Name',
      required: true,
      inputType: 'Name',
      id: 'firstName',
      validator: this._validationService.nameValidator,
      disabled,
    },
    {
      label: 'Last Name',
      required: true,
      inputType: 'Name',
      id: 'lastName',
      validator: this._validationService.nameValidator,
      disabled,
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
      disabled,
    },
    {
      label: 'Age',
      inputType: 'Name',
      id: 'age',
      disabled,
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
      disabled,
    },
  ];
  products=[
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  }
  ]

  HistoryTable: ICommonLazyTableProps = {
    data: [
      {
        date: '12/12/2020',
        time: '12:00 PM',
        doctor: 'Dr. John Doe',
        status: 'Pending',
      },
      {
        date: '12/12/2020',
        time: '12:00 PM',
        doctor: 'Dr. John Doe',
        status: 'Pending',
      },
      {
        date: '12/12/2021',
        time: '12:00 PM',
        doctor: 'Dr. John ',
        status: 'Pending',
      },
    ],
    columns: [
      {
        header: 'Date',
        field: 'date',
        columnType: 'Text',
      },
      {
        header: 'Time',
        field: 'time',
        columnType: 'Text',
      },
      {
        header: 'Doctor',
        field: 'doctor',
        columnType: 'Text',
        align: 'center',
      },
      {
        header: 'Status',
        field: 'status',
        columnType: 'Text',
      },
      {
        header: 'Action',
        columnType: 'Action',
        align: 'center',
        actions: [
          {
            icon: 'pi pi-eye',
            class: 'p-button-info',
            label: 'View'
          }
        ],
      },
    ],
    count: 20,
  };
  isHistoryTableLoading: boolean = false;
  patientId: string = '';
  appointmentId: string = '';

  constructor(
    public router: Router,
    private _validationService: ValidationService,
    private toasterService: ToasterService,
    private patientService: PatientService,
    private route: ActivatedRoute,
    public dialogService: DialogService,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      this.patientId = res.params.patientId;
      this.appointmentId = res.params.id;
      this.init();
    });
  }
  init() {
    this.getHistory('');
    this.getPatientInfo();
    this.getPatientExamination();
  }
  getPatientInfo() {
    this.patientService.getPatientById(this.patientId).subscribe(
      (res: any) => {
        // this.patientInfoModel.firstName = res.firstName;
        // this.patientInfoModel.lastName = res.lastName;
        // this.patientInfoModel.age = res.age;
        // this.patientInfoModel.dateOfBirth = res.dateOfBirth;
        // this.patientInfoModel.address = res.address;
        // this.patientInfoModel.city = res.city;
        // this.patientInfoModel.state = res.state;
        // this.patientInfoModel.zipCode = res.zipCode;
        // this.patientInfoModel.phone = res.phoneNumber;
        // this.patientInfoModel.email = res.email;

        // this.patientInfoModel.initialResponse = res.initialResponse;
        // this.patientInfoModel.triage = res.triage;
        // this.patientInfoModel.gcs = res.gcs;
        // this.patientInfoModel.bp = res.bp;
        // this.patientInfoModel.heartRate = res.heartRate;
        // this.patientInfoModel.sp02 = res.sp02;
        // this.patientInfoModel.respiratoryRate = res.respiratoryRate;
        // this.patientInfoModel.temperature = res.temperature;
        // this.patientInfoModel.allergy = res.allergy;
        // this.patientInfoModel.allergyDetails = res.allergyDetails;
        this.patientInfoModel = res;
        this.getAppointInfo();


      },
      (err: any) => {
        this.toasterService.error(err.error.message);
      }
    );
  }
  getAppointInfo() {
    this.appointmentService.getAppointmentById(this.appointmentId).subscribe((res: any) => {
      this.patientInfoModel.initialResponse = res.initialResponse;
      this.patientInfoModel.triage = res.triage;
      this.patientInfoModel.gcs = res.gcs;
      this.patientInfoModel.bp = res.bp;
      this.patientInfoModel.heartRate = res.heartRate;
      this.patientInfoModel.sp02 = res.sp02;
      this.patientInfoModel.respiratoryRate = res.respiratoryRate;
      this.patientInfoModel.temperature = res.temperature;
      this.patientInfoModel.allergy = res.allergy;
      this.patientInfoModel.allergyDetails = res.allergyDetails;
      this.patientInfoModel.doctor = res.physicianId.firstName + ' ' + res.physicianId.lastName;
      this.patientInfoModel.appointmentDate = res.appointmentDate;
    })
  }
  getPatientExamination() {
    this.patientService
      .getPatientExaminations(this.patientId)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
  getHistory(event: any) { }
  onActionHistory(event: CommonTableEventType) {
    switch (event.action) {
      case 'View':
        this.viewHistoryData()
        break;
      default:
        break;
    }
  }
  viewHistoryData() {
    let ref = this.dialogService.open(AppointmentHistoryComponent, {
      header: 'Appointment History on 11/09/23',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }
}
