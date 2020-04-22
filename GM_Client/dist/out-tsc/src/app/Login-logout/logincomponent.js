import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
//import * as moment from "moment";
let LoginComponent = class LoginComponent {
    constructor(fb, authService, router, ngZone, aspNetUsersService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.aspNetUsersService = aspNetUsersService;
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    //aspNetUsersModel : AspNetUsers;
    //aspNetUsersList: any = [];
    ngOnInit() {
        //this.loadAspNetUsers();
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
    Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.ngZone.run(() => this.router.navigateByUrl('/'));
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'my-login',
        templateUrl: './logincomponent.html'
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=logincomponent.js.map