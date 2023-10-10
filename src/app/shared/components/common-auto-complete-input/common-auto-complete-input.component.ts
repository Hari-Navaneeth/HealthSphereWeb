import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICommonAutoCompleteInputProperty } from '../../model/common-auto-complete-input-property.model';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
    selector: 'app-common-auto-complete-input',
    templateUrl: './common-auto-complete-input.component.html',
})
export class CommonAutoCompleteInputComponent {
    @Input() value: string = '';
    @Output() valueChange = new EventEmitter<string>();
    @Input() property: ICommonAutoCompleteInputProperty;

    suggestions: string[] = [];
    constructor() {}

    onChange = (event: any) => {
        if (this.valueChange && this.valueChange.emit)
            this.valueChange.emit(event.target.value);
    };

    search(event: AutoCompleteCompleteEvent) {
        const query = event.query.toLowerCase();
        this.suggestions = this.property.suggestions.filter((item) =>
            item.toLowerCase().includes(query)
        );
    }

    onBlur(event: any) {
        if (
            this.value &&
            this.suggestions.length === 1 &&
            this.value.toLowerCase() === this.suggestions[0].toLowerCase()
        ) {
            this.value = String(this.suggestions[0]);
        }
    }
}
