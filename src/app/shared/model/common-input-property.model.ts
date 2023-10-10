export interface ICommonInputProperty<T> {
    id?: string;
    label?: string;
    required?: boolean;
    classNames?: string;
    style?: any;
    invalid?: boolean;
    invalidMessage?: string;
    disabled?: boolean;
    validator?: (value: T) => boolean;
}

export interface ViewText{
    key:string;
    value:string|number;
    keyStyle?:string;
    valueStyle?:string;
}
