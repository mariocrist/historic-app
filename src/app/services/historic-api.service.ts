import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IHistoricTramos } from 'src/app/models/historic-tramos';
import { formatDate } from '@angular/common';  

@Injectable({
    providedIn: 'root'
})
export class HistoricApiService {
    private baseURL = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    getHistoric(value: any): Observable<IHistoricTramos[]> {
        console.log('Your form data : ', value);

        let pathApi = "histTramos";
        if (value.report.id == 2) {
            pathApi = "histClientes";
        } else if (value.report.id == 3) {
            pathApi = "peorClientes";
        }
        
        const URL = `${this.baseURL}/api/${pathApi}?fechainicial=${formatDate(value.fechaIni,"yyyy-MM-dd","en-US")}&fechafinal=${formatDate(value.fechaFin,"yyyy-MM-dd","en-US")}`;
        return this.http.get<IHistoricTramos[]>(URL);
    }

}


