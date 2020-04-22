import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EquipListComponent = class EquipListComponent {
    constructor(equipamentoService, grupoMaquinaService) {
        this.equipamentoService = equipamentoService;
        this.grupoMaquinaService = grupoMaquinaService;
        this.EquipList = [];
        this.gruposMaquinaList = [];
    }
    ngOnInit() {
        this.loadEquip();
        this.loadGrupoMaquinas();
    }
    // lista equipamentos 
    loadEquip() {
        return this.equipamentoService.GetEquipamentos().subscribe((data) => {
            this.EquipList = data;
        });
    }
    //load dos grupos de máquinas.
    loadGrupoMaquinas() {
        return this.grupoMaquinaService.GetGruposMaquina().subscribe((data) => {
            this.gruposMaquinaList = data;
        });
    }
};
EquipListComponent = __decorate([
    Component({
        selector: 'app-equip-list',
        templateUrl: './equip-list.component.html',
        styleUrls: ['./equip-list.component.css']
    })
], EquipListComponent);
export { EquipListComponent };
//# sourceMappingURL=equip-list.component.js.map