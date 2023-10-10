import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICommonTextAreaInputProperty } from '../../model/common-text-area-input-property.model';

@Component({
    selector: 'app-common-text-area-input',
    templateUrl: './common-text-area-input.component.html',
    styleUrls: ['./common-text-area-input.component.scss'],
})
export class CommonTextAreaInputComponent {
    @Input() value: string = '';
    @Output() valueChange = new EventEmitter<string>();
    @Input() property: ICommonTextAreaInputProperty;

    constructor() {}

    onChange = (event: any) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(event.target.value);
    };

    showRemainingCharacters = () => {
        let remaining = this.property.maxLength;
        if (this.value) remaining = this.property.maxLength - this.value.length;
        return `Remaining Characters : ${remaining}`;
    };
}
