import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonInputProperty } from '../../model/common-input-property.type';

@Component({
    selector: 'app-common-input',
    templateUrl: './common-input.component.html',
})
export class CommonInputComponent {
    @Input() property: CommonInputProperty;
    @Input() value: any;
    @Output() valueChange = new EventEmitter<any>();

    onChange = (event: any) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(event);
    };

    textInputTypes = ['Text', 'Number', 'Decimal', 'Name'];
    checkForTextInput = () =>
        this.textInputTypes.includes(this.property.inputType);
}
