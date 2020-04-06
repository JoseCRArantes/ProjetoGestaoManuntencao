import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TokenParams} from './TokenAuth/TokenParamsModel';
import { AuthService } from './TokenAuth/auth.service';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


import * as moment from "moment";

@Component({
    selector:'my-login',
    templateUrl: './logincomponent.html'
  })

  export class LoginComponent {
      
    form:FormGroup;
      tokenParam:TokenParams;
  
      constructor(private fb:FormBuilder, 
                   private authService: AuthService, 
                   private router: Router) {
  
             this.form = this.fb.group({
              username: ['', Validators.required],
              password: ['',Validators.required]});
      }

      login() {
        const val = this.form.value;

        if (val.username && val.password) {
            this.authService.login(val.username, val.password)
            /*.
            subscribe(
                data =>{
                  
                    this.tokenParam = data;
                    this.authService.AccessToken = this.tokenParam.access_token;
                }

          localStorage.setItem('access_token', this.authService )*/
          }

        }
      

   
  
      
}
  
