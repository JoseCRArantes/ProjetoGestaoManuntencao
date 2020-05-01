import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrupoMaquina } from './grupomaquinamodel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GrupoMaquinaService {


  baseurl = 'http://localhost:44334/api';

  constructor(private http: HttpClient) { }

  // Http Headers
 /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   }), 
  withCredentials: true
  }

  // GET por IDS
  GetOneGrupoMaquina(id): Observable<GrupoMaquina> {
    return this.http.get<GrupoMaquina>(this.baseurl + '/GrupoMaquinas/' + id, this.httpOptions)
     .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET all 
  GetGruposMaquina(): Observable<GrupoMaquina> {
    return this.http.get<GrupoMaquina>(this.baseurl + '/GrupoMaquinas', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
    
  }

  


  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
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