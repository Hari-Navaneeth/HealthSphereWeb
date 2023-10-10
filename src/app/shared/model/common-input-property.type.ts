import { ICommonAutoCompleteInputProperty } from './common-auto-complete-input-property.model';
import { ICommonDateInputProperty } from './common-date-input-property.model';
import { ICommonDropdownInputProperty } from './common-dropdown-input-property.model';
import { ICommonTextAreaInputProperty } from './common-text-area-input-property.model';
import { ICommonTextInputProperty } from './common-text-input-property.model';

export type CommonInputProperty =
    | ICommonTextInputProperty
    | ICommonTextAreaInputProperty
    | ICommonDateInputProperty
    | ICommonDropdownInputProperty
    | ICommonAutoCompleteInputProperty;
