import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let EquipamentoService = class EquipamentoService {
    constructor(http) {
        this.http = http;
        this.baseurl = 'http://localhost:44334/api';
        // Http Headers
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            withCredentials: true
        };
    }
    // POST
    CreateEquip(data) {
        return this.http.post(this.baseurl + '/Equipamentoes', JSON.stringify(data), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // GET
    GetOneEquip(id) {
        return this.http.get(this.baseurl + '/Equipamentoes/' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // GET
    GetEquipamentos() {
        return this.http.get(this.baseurl + '/Equipamentoes', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // PUT
    UpdateEquipamento(id, data) {
        return this.http.put(this.baseurl + '/Equipamentoes/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
        }
        else {
            // Get erro lado servidor
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
EquipamentoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EquipamentoService);
export { EquipamentoService };
//# sourceMappingURL=equipamento.service.js.map