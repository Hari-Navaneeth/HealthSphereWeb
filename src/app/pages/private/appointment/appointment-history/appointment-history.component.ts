import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewText } from 'src/app/shared/model/common-input-property.model';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent {
  historyData: ViewText[] = [];
  constructor(public ref: DynamicDialogRef) { }
  ngOnInit(): void {
    this.historyData = [
      {
        key: 'Weight',
        value: '70'
      },
      {
        key:'Blood Group',
        value:'B+'
      },
      {
        key:'Blood Pressure',
        value:'120/80'
      },
      {
        key:'Sugar Level',
        value:'120'
      },
      {
        key:'Temperature',
        value:'98'
      },
      {
        key:'SpO2',
        value:'98'
      }
    ]
  }

}
