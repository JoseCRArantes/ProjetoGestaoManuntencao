import {Component, Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {TokenParams} from '../TokenAuth/TokenParamsModel';
import { AuthService } from '../TokenAuth/auth.service';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { AspNetUsersLoadComponent} from './asp-net-users-load/asp-net-users-load.component';
import { AspNetUsers } from '../shared/aspNetUsers/aspNetUsers.model';
import { AspNetUsersService } from '../shared/aspNetUsers/aspNetUsers.service';


//import * as moment from "moment";

@Component({
    selector:'my-login',
    templateUrl: './logincomponent.html'
  })

  export class LoginComponent {
      
    form:FormGroup;
    tokenParam:TokenParams;
    //aspNetUsersModel : AspNetUsers;
    //aspNetUsersList: any = [];
    
    

    ngOnInit() {
      //this.loadAspNetUsers();
      
    }
      constructor(
        private fb:FormBuilder, 
        private authService: AuthService, 
        private router: Router, 
        private ngZone: NgZone,
        public aspNetUsersService: AspNetUsersService) 
      {
        this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['',Validators.required]});
      }

     /*  loadAspNetUsers() {
        return this.aspNetUsersService.GetAspNetUsers().subscribe((data: {}) => {
          this.aspNetUsersList = data;
        })
      } */


      //Método que chama o pedido de Token 
      //Problemas aqui: 
      login() { 
        
        const val = this.form.value;
        this.authService.login(val.username, val.password);
        
      } 
      
     

        Logout(){
          this.authService.logout();

          setTimeout(() => 
          {
              this.router.navigate(['/my-login']);
              localStorage.removeItem('token');
              localStorage.removeItem('username');
          },
            5000);
          
        }
}
  
