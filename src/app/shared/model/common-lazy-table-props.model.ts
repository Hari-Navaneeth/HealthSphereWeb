import { ICommonTableColumn } from './common-table-column.model';

export interface ICommonLazyTableProps<T = any> {
    data: T[];
    columns: ICommonTableColumn[];
    count: number;
}
