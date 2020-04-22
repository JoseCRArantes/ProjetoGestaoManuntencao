import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GrupoMaquinaListComponent = class GrupoMaquinaListComponent {
    constructor(grupoMaquinaService) {
        this.grupoMaquinaService = grupoMaquinaService;
        this.GrupoMaquinaList = [];
    }
    ngOnInit() {
        this.loadGrupoMaquinas();
    }
    // lista grupos de máquinas
    loadGrupoMaquinas() {
        return this.grupoMaquinaService.GetGruposMaquina().subscribe((data) => {
            this.GrupoMaquinaList = data;
        });
    }
};
GrupoMaquinaListComponent = __decorate([
    Component({
        selector: 'app-grupomaquina-list',
        templateUrl: './grupomaquina-list.component.html',
        styleUrls: ['./grupomaquina-list.component.css']
    })
], GrupoMaquinaListComponent);
export { GrupoMaquinaListComponent };
//# sourceMappingURL=grupomaquina-list.component.js.map