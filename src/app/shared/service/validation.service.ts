import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    constructor() {}

    emptyValueValidator = (value: any) =>
        typeof value !== 'undefined' && value !== null;

    dateValidator = (value: any) =>
        this.emptyValueValidator(value) &&
        typeof value === 'object' &&
        value instanceof Date;

    stringValidator = (str: any) =>
        this.emptyValueValidator(str) &&
        typeof str === 'string' &&
        str.length > 0;

    static numberContainsRegex = /\d+/;
    nameValidator = (personName: string) =>
        this.stringValidator(personName) &&
        !ValidationService.numberContainsRegex.test(personName);

    numberValidator = (num: string) =>
        this.stringValidator(num) && !isNaN(Number(num));

    phoneValidator = (phone: string) =>
        this.stringValidator(phone) &&
        phone.length === 10 &&
        !isNaN(Number(phone));

    zipCodeValidator = (zipCode: string) =>
        this.stringValidator(zipCode) &&
        zipCode.length === 6 &&
        !isNaN(Number(zipCode));

    static emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailValidator = (email: string) =>
        this.stringValidator(email) && ValidationService.emailRegex.test(email);

    specialKeys = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'Tab',
        'Delete',
        'Control',
        'F12',
        'Shift',
        'Home',
        'End',
    ];

    allowOnlyNumberKeyPressEvent(event: any) {
        const numberRegex = new RegExp('^[0-9]*$');

        const position = event.target.selectionStart;
        let beginValue = String(event.target.value).slice(0, position);
        let endValue = String(event.target.value).slice(position);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            if (event.key === 'Backspace') {
                beginValue = String(event.target.value).slice(0, position - 1);
            } else if (event.key === 'Delete') {
                endValue = String(event.target.value).slice(position + 1);
            }
            return;
        } else if (event?.ctrlKey) {
            return;
        } else {
            const inputValue = beginValue + String(event.key) + endValue;
            if (inputValue.match(numberRegex) == null) {
                event.preventDefault();
            }
        }
    }

    allowOnlyDecimalKeyPressEvent(event: any, decimalPoints = 2) {
        const numberRegex = new RegExp('^[0-9]*$');

        const position = event.target.selectionStart;
        let beginValue = String(event.target.value).slice(0, position);
        let endValue = String(event.target.value).slice(position);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            if (event.key === 'Backspace') {
                beginValue = String(event.target.value).slice(0, position - 1);
            } else if (event.key === 'Delete') {
                endValue = String(event.target.value).slice(position + 1);
            }
            return;
        } else if (event?.ctrlKey) {
            return;
        } else {
            const inputValue = beginValue + String(event.key) + endValue;
            const splittedValues = inputValue.split('.');
            const count = splittedValues.length - 1;
            if (count === 0) {
                if (inputValue.match(numberRegex) == null) {
                    event.preventDefault();
                }
            } else if (count === 1) {
                const [integerValue, decimalValue] = splittedValues;
                if (decimalValue) {
                    if (
                        integerValue.match(numberRegex) == null ||
                        decimalValue.match(numberRegex) == null ||
                        decimalValue.length > decimalPoints
                    )
                        event.preventDefault();
                } else {
                    if (integerValue.match(numberRegex) == null)
                        event.preventDefault();
                }
            } else {
                event.preventDefault();
            }
        }
    }

    allowOnlyNameKeyPressEvent(event: any) {
        const position = event.target.selectionStart;
        let beginValue = String(event.target.value).slice(0, position);
        let endValue = String(event.target.value).slice(position);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            if (event.key === 'Backspace') {
                beginValue = String(event.target.value).slice(0, position - 1);
            } else if (event.key === 'Delete') {
                endValue = String(event.target.value).slice(position + 1);
            }
            return;
        } else if (event?.ctrlKey) {
            return;
        } else {
            const inputValue = beginValue + String(event.key) + endValue;
            if (!this.nameValidator(inputValue)) {
                event.preventDefault();
            }
        }
    }
}
