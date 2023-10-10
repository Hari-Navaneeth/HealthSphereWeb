import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICommonTextInputProperty } from '../../model/common-text-input-property.model';
import { ValidationService } from '../../service/validation.service';

@Component({
    selector: 'app-common-text-input',
    templateUrl: './common-text-input.component.html',
})
export class CommonTextInputComponent {
    @Input() value: string = '';
    @Output() valueChange = new EventEmitter<string>();
    @Input() property: ICommonTextInputProperty;

    constructor(private validationService: ValidationService) {}

    onChange = (event: any) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(event.target.value);
    };

    onKeyPress = (event: any) => {
        switch (this.property.inputType) {
            case 'Number':
                this.validationService.allowOnlyNumberKeyPressEvent(event);
                break;
            case 'Decimal':
                this.validationService.allowOnlyDecimalKeyPressEvent(event);
                break;
            case 'Name':
                this.validationService.allowOnlyNameKeyPressEvent(event);
                break;

            default:
                break;
        }
    };
}
