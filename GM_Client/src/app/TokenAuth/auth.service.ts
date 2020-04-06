import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EquipamentoService} from '../shared/equipamento/equipamento.service';
/*import {Headers, Http, HttpClienteModule} from '@angular/common/http';*/

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipamento } from '../shared/equipamento/equipamentomodel';
import { EquipListComponent } from '../components/equipamento-list/equip-list.component';

@Injectable()
export class AuthService{

    
    constructor(private http:HttpClient)
    {  }
    private TokenAPI = "http://localhost:44334/Token";
    private TokenLogOut = "http://localhost:44334/api/Account/Logout"
    equipamentoService: EquipamentoService;
 
    AccessToken: string = "";

    login(Username:string, Password:string)
    { 
      console.log('Teste - AUTH login');
      
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
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

    /*getListaEquipamentos:Observable<Equipamento[]>
    {
      var headersForEquipamentoApi = new Headers();
      if(this.AccessToken)
      {
        headersForEquipamentoApi.append('Authorization', 'Bearer' + this.AccessToken)
      }

    }*/

}