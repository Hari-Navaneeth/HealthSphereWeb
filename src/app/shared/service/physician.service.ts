import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ILazyApiProps } from '../model/lazy-api-props.model';

@Injectable({
    providedIn: 'root',
})
export class PhysicianService {
    constructor(private _apiService: ApiService) {}
    addPhysician = (data: any) =>
        this._apiService.post({ url: 'physician', data });
    getPhysicians = (params: ILazyApiProps) =>
        this._apiService.get('physician', params as any);
    getPhysician = (params: any) =>
        this._apiService.get('physician', params);
    updatePhysician = (data: any) =>
        this._apiService.put({
            url: 'panels/physician/update-physician',
            data,
        });
    deletePhysician = (id: number) =>
        this._apiService.delete(`physician/${id}`);

    getAllPhysicianId(){
        return this._apiService.get('physician/id');
    }
}
