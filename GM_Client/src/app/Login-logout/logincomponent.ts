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
//import { AspNetUsersLoadComponent} from './asp-net-users-load/asp-net-users-load.component';
import { AspNetUsers } from "../shared/aspNetUsers/aspNetUsers.model";
import { AspNetUsersService } from "../shared/aspNetUsers/aspNetUsers.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
  }
  constructor(
    private actRoute: ActivatedRoute,   
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    public aspNetUsersService: AspNetUsersService
  ) {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    const val = this.form.value;
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(val.username, val.password);
    

 /*    setTimeout(() => {
      this.refresh();
    },3000);  */
  }

  refresh(): void {
    window.location.reload();
  }
}
