import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let UtilizadorService = class UtilizadorService {
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
    CreateUtilizador(data) {
        return this.http.post(this.baseurl + '/Utilizadors', JSON.stringify(data), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // GET
    GetOneUtilizador(id) {
        return this.http.get(this.baseurl + '/Utilizadors/' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // GET
    GetUtilizador() {
        return this.http.get(this.baseurl + '/Utilizadors', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // PUT
    UpdateUtilizador(id, data) {
        return this.http.put(this.baseurl + '/Utilizadors/' + id, JSON.stringify(data), this.httpOptions)
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
UtilizadorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UtilizadorService);
export { UtilizadorService };
//# sourceMappingURL=utilizador.service.js.map