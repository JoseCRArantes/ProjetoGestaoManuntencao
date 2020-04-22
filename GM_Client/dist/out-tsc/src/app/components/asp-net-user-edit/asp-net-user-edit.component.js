import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AspNetUserEditComponent = class AspNetUserEditComponent {
    constructor(actRoute, tiposUtilizadorService, aspNetUsersService, fb, ngZone, router) {
        this.actRoute = actRoute;
        this.tiposUtilizadorService = tiposUtilizadorService;
        this.aspNetUsersService = aspNetUsersService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.tipoUtilizadorList = [];
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.aspNetUsersService.GetOneUser(id).subscribe((data) => {
            this.updateUtilizadorForm = this.fb.group({
                UserName: [data.UserName],
                Nome: [data.Nome],
                NumeroUtilizador: [data.NumeroUtilizador],
                IDTipo: [data.IDTipo],
            });
            console.log(data);
        });
    }
    ngOnInit() {
        this.updateForm();
        this.loadTiposUtilizador();
    }
    updateForm() {
        this.updateUtilizadorForm = this.fb.group({
            UserName: [''],
            Nome: [''],
            NumeroUtilizador: [0],
            IDTipo: [0]
        });
    }
    loadTiposUtilizador() {
        return this.tiposUtilizadorService.GetTiposUtilizador().subscribe((data) => {
            this.tipoUtilizadorList = data;
        });
    }
    submitForm() {
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.aspNetUsersService.UpdateAspNetUser(id, this.updateUtilizadorForm.value).subscribe(res => {
            this.ngZone.run(() => this.router.navigateByUrl('/asp-net-user-list'));
        });
    }
};
AspNetUserEditComponent = __decorate([
    Component({
        selector: 'app-asp-net-user-edit',
        templateUrl: './asp-net-user-edit.component.html',
        styleUrls: ['./asp-net-user-edit.component.css']
    })
], AspNetUserEditComponent);
export { AspNetUserEditComponent };
//# sourceMappingURL=asp-net-user-edit.component.js.map