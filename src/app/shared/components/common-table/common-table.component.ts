import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICommonTableColumn } from '../../model/common-table-column.model';
import { CommonTableEventType } from '../../model/common-table-event.type';

@Component({
    selector: 'app-common-table',
    templateUrl: './common-table.component.html',
    styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
    @Input() columns: ICommonTableColumn[] = [];
    @Input() value: any[] = [];
    @Input() totalRecords: any[] = [];
    @Input() globalFilterFields: string[] = [];
    @Input() loading: boolean = false;
    @Output() onAction = new EventEmitter<CommonTableEventType>();
    @Input() showExportButtons = false;
    @Input() fileName = 'excel';
    @Input() rows = 10;
    first = 0;
    @Output() onPageChange = new EventEmitter<{
        offset: number;
        limit: number;
    }>();

    onPageChangeEvent(event: any) {
        if (this.onPageChange) {
            this.first = event.first;
            this.rows = event.rows;
            this.onPageChange.emit({ limit: this.rows, offset: this.first });
        }
    }

    onRowChangeEvent() {
        this.first = 0;
        this.onPageChange.emit({ limit: this.rows, offset: this.first });
    }

    onActionClick = (event, rowData: any, action: string | number) => {
        if (this.onAction) this.onAction.emit({ event, rowData, action });
    };

    getCellData = (row: any, column: ICommonTableColumn) => {
        let text = '-';
        if (column?.field) {
            text = String(row[column.field]);
        } else if (column?.getter) {
            text = String(column?.getter(row));
        }
        if (text !== '-') {
            if (column.columnType === 'Phone') text = `+91 ${text}`;
        }
        return text;
    };

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(
                this.value.map((row) => {
                    const rowData: any = {};
                    this.columns.forEach((col) => {
                        if (!['Action'].includes(col.header))
                            rowData[col.header] = this.getCellData(row, col);
                    });
                    return rowData;
                })
            );
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, this.fileName);
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        import('file-saver').then((FileSaver) => {
            let EXCEL_TYPE =
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data: Blob = new Blob([buffer], {
                type: EXCEL_TYPE,
            });
            FileSaver.default(
                data,
                fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
            );
        });
    }
}
