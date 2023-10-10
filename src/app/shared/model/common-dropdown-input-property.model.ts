import { ICommonInputProperty } from './common-input-property.model';

interface IDropdownOption {
    label: string;
    value: string | number;
}

export type DropdownOption = IDropdownOption | string | number;

export interface ICommonDropdownInputProperty
    extends ICommonInputProperty<string | number> {
    inputType: 'Dropdown';
    options: DropdownOption[];
    optionTypeStr?: boolean;
}
