import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from './menu.model';

@Injectable({
    providedIn: 'root'
})

export class MenuService {
    constructor(private readonly http: HttpClient) {}

    getData(url: string): Observable<IMenu[]> {
        return this.http.get<IMenu[]>(`http://localhost:3000/${url}`);
    }

}