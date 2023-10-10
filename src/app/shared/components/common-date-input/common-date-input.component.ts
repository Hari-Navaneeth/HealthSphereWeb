import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICommonDateInputProperty } from '../../model/common-date-input-property.model';

@Component({
    selector: 'app-common-date-input',
    templateUrl: './common-date-input.component.html',
})
export class CommonDateInputComponent {
    @Input() value: Date = null;
    @Output() valueChange = new EventEmitter<Date>();
    @Input() property: ICommonDateInputProperty;

    constructor() {}

    onChange = (value: Date) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(value);
    };
}
