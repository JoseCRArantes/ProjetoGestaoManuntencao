import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AspNetUsers } from "./aspNetUsers.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "./../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class AspNetUsersService {
  baseurl = "http://localhost:44334/api";

  constructor(private http: HttpClient) {}

  // Http Headers
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }*/

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  // GET
  GetAspNetUsers(): Observable<AspNetUsers> {
    return this.http
      .get<AspNetUsers>(BACKEND_URL + "/AspNetUsers", this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //GET ONE
  GetOneUser(id): Observable<AspNetUsers> {
    return this.http
      .get<AspNetUsers>(
        BACKEND_URL + "/AspNetUsers?UserName=" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //PUT
  UpdateAspNetUser(id, data): Observable<AspNetUsers> {
    return this.http
      .put<AspNetUsers>(
        BACKEND_URL + "/AspNetUsers?Username=" + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get erro lado cliente
      errorMessage = error.error.message;
    } else {
      // Get erro lado servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
