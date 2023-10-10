import { ICommonInputProperty } from './common-input-property.model';

export interface ICommonAutoCompleteInputProperty
    extends ICommonInputProperty<string> {
    maxLength?: number;
    inputType: 'AutoComplete';
    delay?: number;
    suggestions: string[];
}
