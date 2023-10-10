import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ILazyApiProps } from '../model/lazy-api-props.model';

@Injectable({
    providedIn: 'root',
})
export class StaffService {
    constructor(private _apiService: ApiService) {}

    addStaff = (data: any) =>
        this._apiService.post({ url: 'staff', data });
    getStaffs = (params: ILazyApiProps) =>
        this._apiService.get('staff', params as any);
    getStaff = (params: any) =>
        this._apiService.get(`staff/${params}`);
    updateStaff = (data: any) =>
        this._apiService.put({
            url: 'panels/staff/update-staff',
            data,
        });
    deleteStaff = (id: string) =>
        this._apiService.delete(`staff/${id}`);
}
