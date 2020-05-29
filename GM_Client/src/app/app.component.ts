import { Component, OnInit } from '@angular/core';

import {AuthService} from '../app/TokenAuth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    // private errorService: ErrorService
  ) {}

  title = 'GestaoManutencao';


  ngOnInit() {
    this.authService.autoAuthUser();
    // this.errorSub = this.errorService.getErrorListener().subscribe(
    //   message => this.hasError = message !== null
    // );
  }
}
