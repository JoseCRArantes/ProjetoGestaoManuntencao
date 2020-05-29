import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { TokenParams } from "./TokenParamsModel";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Subject } from "rxjs";

// Http Headers
/*   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 */

import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private username: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  private TokenAPI = "http://localhost:44334/Token";

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  getUserName() {
    return this.username;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  //Método de login
  login(Username: string, Password: string) {
    console.log("Teste - AUTH login");

    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    let options = { headers: headers };
    var data =
      "grant_type=password&username=" + Username + "&password=" + Password;

    return this.http.post<TokenParams>(this.TokenAPI, data, options).subscribe(
      (response) => {
        console.log(response);
        const token = response.access_token;
        if (token) {
          const expiresInDuration = response.expires_in;
          this.setAuthTimer(expiresInDuration);
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          console.log("expirationDate", expirationDate);
          // localStorage.setItem("token", response.access_token);
          this.saveAuthData(
            response.access_token,
            expirationDate,
            response.userName
          );
          this.router.navigate(["/"]);
        }
      },
      (err) => {
        this.authStatusListener.next(false);
        console.log(err.message);
      }
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    console.log("Passei no logout");
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      //this.logout();
    }, duration * 1000);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.username = authInformation.username;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const username = localStorage.getItem("username");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      username: username,
    };
  }

  private saveAuthData(token: string, expirationDate: Date, userName: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("username", userName);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("username");
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  //Refresh à janela.
  refresh(): void {
    window.location.reload();
  }

  //erros de pedidos ao servidor.
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

/* 

  logout(){
    return this.http.post<TokenParams>("http://localhost:44334/api/Account/Logout", this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }   */

/* logout() {
    console.log("logout");
    this.http
      .post<TokenParams>(
        "http://localhost:44334/api/Account/Logout",
        this.httpOptions
      )
      .toPromise()
      .then((res) => {
        console.log(res, "Passei no logout");
       this.isAuthenticated = false;
       this.authStatusListener.next(false);
       clearTimeout(this.tokenTimer);
       localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.router.navigate(["/"]);
      })
      .catch((err) => {console.log("Não fez logout");});
  }  */
