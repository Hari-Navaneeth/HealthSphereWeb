import { ICommonInputProperty } from './common-input-property.model';

export interface ICommonDateInputProperty
    extends ICommonInputProperty<Date> {
    inputType: 'Date';
    maxDate?: Date;
    minDate?: Date;
    hideIcon?: boolean;
    hideWeek?: boolean;
}
