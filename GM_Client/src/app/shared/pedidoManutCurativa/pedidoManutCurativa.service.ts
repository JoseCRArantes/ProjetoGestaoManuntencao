import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PedidoManutCurativa } from './pedidoManutCurativa.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PedidoManutCurativaService {
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
  CreatePedidoMCurativa(data): Observable<PedidoManutCurativa> {
    return this.http.post<PedidoManutCurativa>(this.baseurl + '/PedidoManutCurativas', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  // GET
  GetOnePedidoMCurativa(id): Observable<PedidoManutCurativa> {
    return this.http.get<PedidoManutCurativa>(this.baseurl + '/PedidoManutCurativas/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetPedidos(): Observable<PedidoManutCurativa> {
    return this.http.get<PedidoManutCurativa>(this.baseurl + '/PedidoManutCurativas', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdatePedido(id, data): Observable<PedidoManutCurativa> {
    return this.http.put<PedidoManutCurativa>(this.baseurl + '/PedidoManutCurativas/' + id, JSON.stringify(data), this.httpOptions)
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
     } else {
       // Get erro lado servidor
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}