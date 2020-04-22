import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(fb, ngZone, router, registerService, tipoUtilizadorService) {
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.registerService = registerService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.tipoUtilizadorList = [];
    }
    ngOnInit() {
        this.addRegister();
        this.loadTiposUtilizador();
    }
    addRegister() {
        this.equipForm = this.fb.group({
            Email: [''],
            Password: [''],
            ConfirmPassword: [''],
            IDTipo: [0],
            NumeroUtilizador: [0],
            Nome: ['']
        });
    }
    loadTiposUtilizador() {
        return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data) => {
            this.tipoUtilizadorList = data;
        });
    }
    submitForm() {
        this.registerService.CreateRegisto(this.equipForm.value).subscribe(res => {
            console.log('Registo adicionado!');
            this.ngZone.run(() => this.router.navigateByUrl(''));
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-add-register',
        templateUrl: './register-add.component.html',
        styleUrls: ['./register-add.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register-add.component.js.map