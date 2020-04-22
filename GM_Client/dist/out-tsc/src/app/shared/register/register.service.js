import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.baseurl = 'http://localhost:44334/api';
        // Http Headers
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST
    CreateRegisto(data) {
        return this.http.post(this.baseurl + '/Account/Register', JSON.stringify(data), this.httpOptions)
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
RegisterService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RegisterService);
export { RegisterService };
//# sourceMappingURL=register.service.js.map