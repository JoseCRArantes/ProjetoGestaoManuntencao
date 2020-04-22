import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let AspNetUsersService = class AspNetUsersService {
    constructor(http) {
        this.http = http;
        this.baseurl = 'http://localhost:44334/api';
        // Http Headers
        /*httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }*/
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            withCredentials: true
        };
    }
    // GET
    GetAspNetUsers() {
        return this.http.get(this.baseurl + '/AspNetUsers', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    //GET ONE 
    GetOneUser(id) {
        return this.http.get(this.baseurl + '/AspNetUsers?UserName=' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }
    //PUT
    UpdateAspNetUser(id, data) {
        return this.http.put(this.baseurl + '/AspNetUsers?Username=' + id, JSON.stringify(data), this.httpOptions)
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
AspNetUsersService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AspNetUsersService);
export { AspNetUsersService };
//# sourceMappingURL=aspNetUsers.service.js.map