import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatusBoardDataService {
    constructor(private http: HttpClient) {}

    getDepartments() {
        console.log('3');
        return of([
            {id: 0, name: "Departamentul 1"},
            {id: 1, name: "Departamentul 2"},
            {id: 2, name: "Departamentul 3"},
            {id: 3, name: "Departamentul 4"},
            {id: 4, name: "Departamentul 5"},
        ]);
    }
}