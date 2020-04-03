import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TokenParams} from './TokenAuth/TokenParamsModel';
import { AuthService } from './auth.service';
import {NgForm} from '@angular/forms';

@Component({
    selector:'my-login',
    templateUrl: './logincomponent.html'
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
        console.log('teste');
        this.authService.login(this.username, this.password);

    }

}
