import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EquipamentoService} from '../shared/equipamento/equipamento.service';
/*import {Headers, Http, HttpClienteModule} from '@angular/common/http';*/
import {map} from 'rxjs/operators';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipamento } from '../shared/equipamento/equipamentomodel';
import { EquipListComponent } from '../components/equipamento-list/equip-list.component';
import { TokenParams } from './TokenParamsModel';

@Injectable()
export class AuthService{

    
    constructor(private http:HttpClient)
    {  }
    private TokenAPI = "http://localhost:44334/Token";
    
    equipamentoService: EquipamentoService;
 
    AccessToken: string = "";

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
            //const headers = {'Authorization': 'Bearer ' + res.access_token}
            //console.log('guardou');
             console.log(localStorage.getItem('token'));
        },
        err=>{
            console.log(err.message);
        });
    }

}