import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenParams} from './TokenAuth/TokenParamsModel';
import { AuthService } from './auth.service';

@Component({
    selector:'my-login',
    template: './logincomponent.html'
})

export class LoginComponent{

    tokenParam:TokenParams;
    username : string;
    password : string;
    constructor(private router : Router, private authService : AuthService)
    {

    }

    DoLogin():void
    {
        this.authService.login(this.username, this.password)
        .subscribe(

            data=>{
                this.tokenParam = data;
                this.authService.AccessToken = this.tokenParam.access_token;
                this.router.navigate(['']);
            }
        )
    }

}
