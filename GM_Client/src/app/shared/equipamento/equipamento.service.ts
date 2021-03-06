import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Equipamento } from "./equipamentomodel";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { environment } from "./../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class EquipamentoService {
  baseurl = "http://localhost:44334/api";

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  // POST
  CreateEquip(data): Observable<Equipamento> {
    return this.http
      .post<Equipamento>(
        BACKEND_URL + "/Equipamentoes",
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOneEquip(id): Observable<Equipamento> {
    return this.http
      .get<Equipamento>(BACKEND_URL + "/Equipamentoes/" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetEquipamentos(): Observable<Equipamento[]> {
    return this.http
      .get<Equipamento[]>(BACKEND_URL + "/Equipamentoes", this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdateEquipamento(id, data): Observable<Equipamento> {
    return this.http
      .put<Equipamento>(
        BACKEND_URL + "/Equipamentoes/" + id,
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
