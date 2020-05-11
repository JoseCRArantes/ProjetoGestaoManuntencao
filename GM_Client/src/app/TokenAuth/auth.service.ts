import {Injectable} from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenParams } from './TokenParamsModel';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService{

    
    constructor(private http:HttpClient)
    {  }
    private TokenAPI = "http://localhost:44334/Token";

     // Http Headers
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    login(Username:string, Password:string)
    { 
      console.log('Teste - AUTH login');
      
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
      let options = { headers: headers };
      var data = "grant_type=password&username=" + Username + "&password=" + Password;
    
      return this.http.post<TokenParams>(this.TokenAPI, data, options).subscribe(
        res=>{
            //console.log(res);
            localStorage.setItem('token', res.access_token);
            // O localStorage abaixo, irá guardar o username que tem sessão iniciada, 
            //sendo necessário para várias coisas, uma delas:
            //para verificar se o utilizador com sessao iniciada,
            //tem a ficha de utilizador criada.
            localStorage.setItem('username', res.userName);
            console.log('Saiu do AUTH login');
            
        },
        err=>{
            console.log(err.message);
        });
        
    }

}