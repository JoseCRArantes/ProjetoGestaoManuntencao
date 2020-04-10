import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilizador } from './utilizador.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UtilizadorService {

  baseurl = 'http://localhost:44334/api';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
   }), 
   withCredentials: true
  }

  // POST
  CreateUtilizador(data): Observable<Utilizador> {
    return this.http.post<Utilizador>(this.baseurl + '/Utilizadors', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetOneUtilizador(id): Observable<Utilizador> {
    return this.http.get<Utilizador>(this.baseurl + '/Utilizadors/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetUtilizador(): Observable<Utilizador> {
    return this.http.get<Utilizador>(this.baseurl + '/Utilizadors', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateUtilizador(id, data): Observable<Utilizador> {
    return this.http.put<Utilizador>(this.baseurl + '/Utilizadors/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) { 
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

}