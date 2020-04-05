import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenParams} from './TokenAuth/TokenParamsModel';
import { AuthService } from './auth.service';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector:'my-login',
    templateUrl: './logincomponent.html'
})

export class LoginComponent{

    tokenParam:TokenParams;
    username : string;
    password : string;

    constructor(private router : Router,
         private authService : AuthService)
    {
        
    }

    //Método que chama authToken, e atribui os dados ao objeto TokenParamsModelo
    DoLogin():void
    {
        this.authService.login(this.username, this.password)
        .subscribe(
            data =>{
                this.tokenParam = data;
                this.authService.AccessToken = this.tokenParam.access_token;
            }
        );
    }
}
