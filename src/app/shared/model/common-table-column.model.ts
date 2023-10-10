export interface ICommonTableColumn {
    header: string;
    field?: string;
    getter?: (row: any) => any;
    columnType: 'Text' | 'Number' | 'Phone' | 'Email' | 'Price' | 'Action';
    actions?: ActionColumn[];
    isLink?: boolean;
    link?: string;
    command?: (row: any) => void;
    align?: 'left' | 'center' | 'right';
}

export interface ActionColumn {
    icon?: string;
    class?: string;
    label?: string;
}
