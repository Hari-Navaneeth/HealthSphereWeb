import { ICommonInputProperty } from './common-input-property.model';

export interface ICommonTextAreaInputProperty extends ICommonInputProperty<string> {    
    inputType: 'TextArea';
    maxLength?: number;
    rows?:number;
    cols?:number;
}
