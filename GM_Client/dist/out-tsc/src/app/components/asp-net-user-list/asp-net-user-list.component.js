import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AspNetUserListComponent = class AspNetUserListComponent {
    constructor(aspNetUserService, tipoUtilizadorService) {
        this.aspNetUserService = aspNetUserService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.aspNetUsersList = [];
        this.tipoUtilizadorList = [];
    }
    ngOnInit() {
        this.loadAspNetUsers();
        this.loadTiposUtilizador();
    }
    //load utilizadores da DB 
    loadAspNetUsers() {
        return this.aspNetUserService.GetAspNetUsers().subscribe((data) => {
            this.aspNetUsersList = data;
        });
    }
    //load tipos de utilizador da DB
    loadTiposUtilizador() {
        return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data) => {
            this.tipoUtilizadorList = data;
        });
    }
};
AspNetUserListComponent = __decorate([
    Component({
        selector: 'app-asp-net-user-list',
        templateUrl: './asp-net-user-list.component.html',
        styleUrls: ['./asp-net-user-list.component.css']
    })
], AspNetUserListComponent);
export { AspNetUserListComponent };
//# sourceMappingURL=asp-net-user-list.component.js.map