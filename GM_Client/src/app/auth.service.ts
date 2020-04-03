import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
/*
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';*/

/*import {Headers, Http, HttpClienteModule} from '@angular/common/http';*/

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import {TokenParams} from './TokenAuth/TokenParamsModel';

@Injectable()
export class AuthService{

    AccessToken: string = "";
    constructor(private http:HttpClient)
    {  }
    private TokenAPI = "http://localhost:44334/Token";
  /*  const headersForTokenApi = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})};*/

    login(Username:string, Password:string)
    { /*
        var headersForTokenAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        var data = "grant_type=password&username=" + Username + "&password=" + Password;

        return this.http.post(this.TokenAPI, data, {headers: headersForTokenAPI})
        .map(res=>res.json()); */
        console.log('teste');
        let headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'});
      let options = { headers: headers };
      var data = "grant_type=password&username=" + Username + "&password=" + Password;

      return this.http.post(this.TokenAPI, data, options).subscribe(
        res=>{
            console.log(res);
        },
        err=>{
            console.log(err.message);
        }
      )

    }

    

/*
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'Authorization': 'my-auth-token'
        })
      };
      
      this.http.post(
         "http://localhost:44334/Token",
         JSON.stringify({id: 4, name: 'some'}),
         httpOptions 
      ).subscribe();*/
}