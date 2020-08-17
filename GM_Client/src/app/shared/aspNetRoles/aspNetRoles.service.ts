import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AspNetRoles } from "./aspNetRoles.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class AspNetRolesService {
  baseurl = "http://localhost:44334/api";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  // GET
  GetAspNetUsers(): Observable<AspNetRoles> {
    return this.http
      .get<AspNetRoles>(BACKEND_URL + "/AspNetRoles", this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }


  //GET ONE
  GetOneUser(id): Observable<AspNetRoles> {
    return this.http
      .get<AspNetRoles>(
        BACKEND_URL + "/AspNetRoles?username=" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //PUT
  UpdateAspNetRole(userName, roleName ,data): Observable<AspNetRoles> {
    return this.http
      .put<AspNetRoles>(
        BACKEND_URL + "/AspNetRoles?userName=" + userName + "&roleName=" + roleName,
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
