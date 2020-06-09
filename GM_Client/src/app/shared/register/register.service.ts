import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Register } from "./registermodel";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "./../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  baseurl = "http://localhost:44334/api";

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // POST
  CreateRegisto(data): Observable<Register> {
    return this.http
      .post<Register>(
        BACKEND_URL + "/Account/Register",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
