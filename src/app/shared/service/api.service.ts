import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { environment } from 'src/environments/environment';

type HttpRequestParams =
    | HttpParams
    | {
          [param: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
      };

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    baseUrl = environment.api.baseUrl;
    apollo: ApolloBase;
    constructor(private http: HttpClient, private apolloProvider: Apollo) {
        this.apollo = this.apolloProvider.use('');
    }
    get = (url: string, params: any = {}) =>
        this.http.get(`${this.baseUrl}/${url}`, {
            params: JSON.parse(JSON.stringify(params)),
        });
    post = ({
        url,
        data,
        params = {},
    }: {
        url: string;
        data: any;
        params?: HttpRequestParams;
    }) => this.http.post(`${this.baseUrl}/${url}`, data, { params });
    put = ({
        url,
        data,
        params = {},
    }: {
        url: string;
        data: any;
        params?: any;
    }) =>
        this.http.put(`${this.baseUrl}/${url}`, data, {
            params: JSON.parse(JSON.stringify(params)),
        });
    delete = (url: string, params: any = {}) =>
        this.http.delete(`${this.baseUrl}/${url}`, {
            params: JSON.parse(JSON.stringify(params)),
        });

    query = ({ query, variables }) =>
        this.apollo.query({
            query,
            variables,
            fetchPolicy: 'no-cache',
        });
    mutate = ({ mutation, variables }) =>
        this.apollo.mutate({
            mutation,
            variables,
            fetchPolicy: 'no-cache',
        });
}
