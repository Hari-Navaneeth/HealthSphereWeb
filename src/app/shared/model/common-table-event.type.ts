export type CommonTableEventType<T = any> = {
    event: any;
    action: string | number;
    rowData: T;
};
