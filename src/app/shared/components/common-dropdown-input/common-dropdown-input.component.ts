import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    DropdownOption,
    ICommonDropdownInputProperty,
} from '../../model/common-dropdown-input-property.model';

@Component({
    selector: 'app-common-dropdown-input',
    templateUrl: './common-dropdown-input.component.html',
})
export class CommonDropdownInputComponent {
    @Input() value: string | number = null;
    @Output() valueChange = new EventEmitter<string | number | null>();
    @Input() property: ICommonDropdownInputProperty;

    constructor() {}

    onChange = (event: any) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(event.value);
    };

    // getArrayOfOption = (oldOptions: DropdownOption[]) => {
    //     if (oldOptions.length > 0) {
    //         const newOptions: DropdownOption[] = [];
    //         oldOptions.forEach((option) => {
    //             if (typeof option === 'object') newOptions.push(option);
    //             else newOptions.push({ label: String(option), value: option });
    //         });
    //         return newOptions;
    //     }
    //     return [];
    // };
}
