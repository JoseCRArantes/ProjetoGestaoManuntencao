import { Component, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { TokenParams } from "../TokenAuth/TokenParamsModel";
import { AuthService } from "../TokenAuth/auth.service";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AspNetUsers } from "../shared/aspNetUsers/aspNetUsers.model";
import { AspNetUsersService } from "../shared/aspNetUsers/aspNetUsers.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

//import * as moment from "moment";

@Component({
  selector: "my-login",
  templateUrl: "./logincomponent.html",
})
export class LoginComponent {
  isLoading = false;
  private authStatusSub: Subscription;
  form: FormGroup;
  tokenParam: TokenParams;
  angForm: FormGroup;
  private 

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
  }
  constructor(
    public _snackBar: MatSnackBar,
    private zone: NgZone,
    private actRoute: ActivatedRoute,   
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    public aspNetUsersService: AspNetUsersService
  ) {

    this.createForm();

  }

  login() {
    const val = this.angForm.value;
    if (this.angForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(val.username, val.password);
    
  }

  //Refresh à janela.
  refresh(): void {
    window.location.reload();
  }

  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 100000,
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


}
