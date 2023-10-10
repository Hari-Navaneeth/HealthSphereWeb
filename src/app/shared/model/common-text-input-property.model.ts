import { ICommonInputProperty } from './common-input-property.model';

export interface ICommonTextInputProperty extends ICommonInputProperty<string> {
    maxLength?: number;
    inputType: 'Text' | 'Number' | 'Name' | 'Decimal';
    preAddon?: string;
    postAddon?: string;
    preAddonText?: string;
    postAddonText?: string;
}
