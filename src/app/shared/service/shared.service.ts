import { Injectable } from '@angular/core';
import moment from 'moment';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    constructor(private messageService: MessageService) {}

    toast = {
        showSuccess: ({
            heading: summary = 'Success',
            message: detail = 'Message Content',
        }) => {
            this.messageService.add({
                severity: 'success',
                summary,
                detail,
            });
        },
        showInfo: ({
            heading: summary = 'Info',
            message: detail = 'Message Content',
        }) => {
            this.messageService.add({
                severity: 'info',
                summary,
                detail,
            });
        },
        showWarn: ({
            heading: summary = 'Warn',
            message: detail = 'Message Content',
        }) => {
            this.messageService.add({
                severity: 'warn',
                summary,
                detail,
            });
        },
        showError: ({
            heading: summary = 'Error',
            message: detail = 'Message Content',
        }) => {
            this.messageService.add({
                severity: 'error',
                summary,
                detail,
            });
        },
        showCustomMessage: this.messageService.add,
    };    

    calculateAge = (dateOfBirth: any) => {
        const birthDate = new Date(dateOfBirth);
        const diff = moment().diff(moment(birthDate), 'milliseconds');
        const duration = moment.duration(diff);
        return `${duration.years()} years, ${duration.months()} months, ${duration.days()} days`;
    };
}
