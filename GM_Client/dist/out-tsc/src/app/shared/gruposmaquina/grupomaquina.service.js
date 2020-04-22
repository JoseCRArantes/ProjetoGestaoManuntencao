import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let GrupoMaquinaService = class GrupoMaquinaService {
    constructor(http) {
        this.http = http;
        this.baseurl = 'http://localhost:44334/api';
        // Http Headers
        /* httpOptions = {
           headers: new HttpHeaders({
             'Content-Type': 'application/json'
           })
         }
       */
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            withCredentials: true
        };
    }
    // GET por IDS
    GetOneGrupoMaquina(id) {
        return this.http.get(this.baseurl + '/GrupoMaquinas/' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // GET all 
    GetGruposMaquina() {
        return this.http.get(this.baseurl + '/GrupoMaquinas', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
GrupoMaquinaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GrupoMaquinaService);
export { GrupoMaquinaService };
//# sourceMappingURL=grupomaquina.service.js.map