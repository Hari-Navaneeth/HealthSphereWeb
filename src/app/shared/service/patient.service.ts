import { Injectable } from '@angular/core';
import { ILazyApiProps } from '../model/lazy-api-props.model';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class PatientService {
    constructor(private _apiService: ApiService) {}

    createPatient(data: any) {
        return this._apiService.post({ url: 'patient', data });
    }
    updatePatient(id:string,data:any) {
        return this._apiService.put({ url: `patient/${id}`, data });
    }

    getPatients(params: ILazyApiProps) {
        return this._apiService.get('patient', params as any);
    }

    getPatientById = (id: string) => this._apiService.get(`patient/${id}`);

    //==========================
    getPatientAppointments(id: string) {
        return this._apiService.get(
            `panels/patient/get-patient-appointments/${id}`
        );
    }
    getPatientPrescriptions(id: string) {
        return this._apiService.get(
            `panels/patient/get-patient-prescriptions/${id}`
        );
    }
    getPatientExaminations(id: string) {
        return this._apiService.get(`patient`, {
            patientId: id,
        });
    }
}
