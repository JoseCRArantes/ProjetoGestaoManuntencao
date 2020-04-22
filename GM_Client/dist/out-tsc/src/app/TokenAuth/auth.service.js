import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.TokenAPI = "http://localhost:44334/Token";
    }
    login(Username, Password) {
        console.log('Teste - AUTH login');
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };
        var data = "grant_type=password&username=" + Username + "&password=" + Password;
        return this.http.post(this.TokenAPI, data, options).subscribe(res => {
            //console.log(res);
            localStorage.setItem('token', res.access_token);
            // O localStorage abaixo, irá guardar o username que tem sessão iniciada, 
            //sendo necessário para várias coisas, uma delas:
            //para verificar se o utilizador com sessao iniciada,
            //tem a ficha de utilizador criada.
            localStorage.setItem('username', res.userName);
            console.log('Saiu do AUTH login');
        }, err => {
            console.log(err.message);
        });
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map